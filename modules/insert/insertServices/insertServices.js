
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



  
module.exports = {
  addBulkKingdom,
    addLiterature,
    addKingdom,
    addKingdomDesc,
    addGeofence
}