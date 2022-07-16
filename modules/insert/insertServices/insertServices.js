
const { push } = require('joi/lib/ref');
let mysqlService = require('../../../databases/mysql/mysql');
let config = require('./../../../config')
let fs = require("fs")
const AWS = require('aws-sdk');

  function addBulkKingdom(opts) {
    try {
        // console.log("***",opts)
        let params = [];
       
        opts.kingdom.map((item) => {
            let i = [];
             i.push(item.title);
             i.push(item.start);
             i.push(item.end)
             console.log("item",i);
          params.push(i)
        })

     console.log("paramas",params[params.length-1])

      let sql = "insert into tb_kingdoms (kingdom, startYear, endYear) VALUES ?";
      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, [params]);
    } catch (error) {
      throw error;
    }
  }

  function addLiterature(opts) {
    try {
        console.log("OPT_ADD_LITERATURE ",opts)
        let params = [];

      let sql = "insert into tb_literature (scriptName,fileName,author,originalName) VALUES (?,?,?,?)";
      params.push(opts.scriptName);
      params.push(opts.fileName);
      params.push(opts.author);
      params.push(opts.originalName);


      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function addKingdom(opts) {
    try {
        console.log("OPT_ADD_KINGDOM ",opts)
        let params = [];

      let sql = "insert into tb_kingdoms (kingdom,startYear,endYear) VALUES (?,?,?)";
      params.push(opts.name);
      params.push(opts.startYear);
      params.push(opts.endYear);

      return mysqlService.runMysqlQueryPromisified("ADDING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function addKingdomDesc(opts) {
    try {
        console.log("OPT_ADD_KINGDOM_DESC ",opts)
        let params = [];

      let sql = "insert into tb_kingdom_desc (kingdom,image,`desc`) VALUES (?,?,?)";
      params.push(opts.name);
      params.push(opts.imageUrl);
      params.push(opts.description);


      return mysqlService.runMysqlQueryPromisified("ADDING_KINGDOM_DESC", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function addRuler(opts) {
    try {
        console.log("OPT_ADD_RULER ",opts)
        let params = [];

      let sql = "insert into tb_rulers (ruler,kingdom,startYear,endYear) VALUES (?,?,?,?)";
      params.push(opts.ruler);
      params.push(opts.kingdom);
      params.push(opts.startYear);
      params.push(opts.endYear);

      return mysqlService.runMysqlQueryPromisified("ADDING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function addRulerDesc(opts) {
    try {
        console.log("OPT_ADD_RULER_DESC ",opts)
        let params = [];

      let sql = "insert into tb_ruler_desc (ruler,image,`desc`) VALUES (?,?,?)";
      params.push(opts.ruler);
      params.push(opts.imageUrl);
      params.push(opts.description);


      return mysqlService.runMysqlQueryPromisified("ADDING_KINGDOM_DESC", sql, params);
    } catch (error) {
      throw error;
    }
  }


  function addGeofence(opts) {
    try {
        console.log("OPT_ADD_KINGDOM ",opts)
        let params = [];

      let sql = "insert into tb_geofence (kingdom,latLong,latitude,longitude) VALUES (?,ST_GeomFromText(?),?,?)";
      params.push(opts.kingdom);
      params.push(opts.latLong);
      params.push(opts.latitude);
      params.push(opts.longitude);

      return mysqlService.runMysqlQueryPromisified("ADDING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function register(opts) {
    try {
        console.log("OPTS_REGISTER ",opts)
        let params = [];

      let sql = "insert into tb_users (username,email,password) VALUES (?,?,?)";
      params.push(opts.username);
      params.push(opts.email);
      params.push(opts.password);

      return mysqlService.runMysqlQueryPromisified("ADDING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function getUserdata(opts) {
    try {
      let params = [];
      let sql = `SELECT * FROM tb_users where 1`;

     if(opts.id){
       sql += ` and id = ?`
       params.push(opts.id);
     }
     if(opts.email){
        sql += ` and email = ?`
        params.push(opts.email)
     }
     if(opts.password){
        sql += ` and password = ?`
        params.push(opts.password)
     }
     if(opts.isLoggedin){
      sql += ` and isLoggedin = ?`
      params.push(opts.isLoggedin);
     }

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, params);
    } catch (error) {
      throw error;
    }
  }

  function updateUsersData(opts) {
    try {
      let obj = {};

      opts.hasOwnProperty("isLoggedin") ? obj.isLoggedin = opts.isLoggedin : 0; 
      opts.latitude ? obj.latitude = opts.latitude : 0;
      opts.longitude ? obj.longitude = opts.longitude : 0;
      let sql = `UPDATE tb_users set ? where id = ?`;

      return mysqlService.runMysqlQueryPromisified("GETTING_DATA", sql, [obj, opts.id]);
    } catch (error) {
      throw error;
    }
  }

  
module.exports = {
  addBulkKingdom,
    addLiterature,
    addKingdom,
    addKingdomDesc,
    addRuler,
    addRulerDesc,
    addGeofence,
    register,
    getUserdata,
    updateUsersData
}