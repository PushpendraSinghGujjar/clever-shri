
let mysqlService = require('../../../databases/mysql/mysql');

function getData(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM sc_test where 1`;

     if(opts.id){
       sql += ` and id = ?`
       params.push(opts.id);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function addData(obj) {
    try {
        console.log("***",obj)
        let params = [];
        let opts = {};

       (obj.name) ? opts.name = obj.name : 0;
       (obj.image) ? opts.image = obj.image : 0;
       (obj.email) ? opts.email = obj.email : 0;


      let sql = "insert into sc_test SET ?";
      params.push(opts);
      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getKingdom(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_kingdoms where 1`;

     if(opts.id){
       sql += ` and id = ?`
       params.push(opts.id);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getKingdomDesc(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_kingdom_desc where 1`;

     if(opts.kingdom){
       sql += ` and kingdom = ?`
       params.push(opts.kingdom);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  
  function getRulerDesc(opts) {
    try {
      let params = [];
      let sql = `SELECT tb_rulers.*,tb_ruler_desc.image, tb_ruler_desc.desc from tb_rulers
      LEFT JOIN tb_ruler_desc ON tb_rulers.ruler = tb_ruler_desc.ruler 
      where 1`;

     if(opts.kingdom){
       sql += ` and kingdom = ?`
       params.push(opts.kingdom);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getCenturies(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_centuries where 1`;

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getKingdomsByYear(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_kingdoms where 1`;

      if(opts.startYear){
        sql += ` AND (startYear < ? AND endYear > ?) OR (startYear BETWEEN ? AND ?)`;
        // startYear > ? AND startYear < ?
        params.push(parseInt(opts.startYear));
        params.push(parseInt(opts.startYear));
        params.push(parseInt(opts.startYear));
        params.push(parseInt(opts.endYear));
      }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getMaps(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_maps where 1`;

     if(opts.kingdom){
       sql += ` and kingdom = ?`
       params.push(opts.kingdom);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getKingdomWithRulers(opts) {
    try {
      let params = [];
      let sql = `SELECT tb_kingdoms.*, CONCAT(
        '[',
      GROUP_CONCAT(JSON_OBJECT('id',IF( tb_rulers.id is not null ,tb_rulers.id , "" ) ,'ruler',IF( tb_rulers.ruler is not null ,tb_rulers.ruler , "" ),'image',IF( tb_ruler_desc.image is not null ,tb_ruler_desc.image , "" ))),
        ']'
      ) as rulers 
      FROM tb_kingdoms
      left JOIN tb_rulers ON tb_kingdoms.kingdom=tb_rulers.kingdom
      left JOIN tb_ruler_desc ON tb_rulers.ruler = tb_ruler_desc.ruler
       where 1 `;

     if(opts.id){
       sql += ` and id = ?`
       params.push(opts.id);
     }

     if (opts.searches && opts.searches.length) {
      sql += ` AND ( 0  `;
      for (let i = 0; i < opts.searches.length; i++) {

        sql += ` or  tb_kingdoms.kingdom   Like  "%${opts.searches[i].replace('"', "")}%" OR  
          tb_rulers.ruler Like "%${opts.searches[i].replace('"', "")}%"`

      }

      sql += ` )  `;

    }

    sql += ` group by tb_kingdoms.kingdom ORDER BY tb_kingdoms.id ASC LIMIT 10`

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getLiterature(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_literature where 1`;

    //  if(opts.kingdom){
    //    sql += ` and kingdom = ?`
    //    params.push(opts.kingdom);
    //  }

      return mysqlService.runMysqlQueryPromisified("GETTING_LITERATURE_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getGeofence(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_geofence where 1`;

     if(opts.search){
       sql += ` and kingdom = ?`
       params.push(opts.search);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_LITERATURE_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }


module.exports = {
    getData,
    addData,
    getKingdom,
    getKingdomDesc,
    getRulerDesc,
    getCenturies,
    getKingdomsByYear,
    getMaps,
    getKingdomWithRulers,
    getLiterature,
    getGeofence
}