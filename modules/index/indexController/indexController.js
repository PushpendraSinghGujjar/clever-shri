
const logg = require('../../../services/logging');

const responses = require("../../../services/responses")
const indexService = require("../indexServices/indexServices");
const insertServices = require("../../insert/insertServices/insertServices")

const language = "en";

//socket
const socketService = require("../../../services/socketService")

async function getData(req, res) {
   
    try {

      let data = await indexService.getData(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function addData(req, res) {
   
    try {
       
      req.body.image = req.file.path;
      console.log("***",req.file)

      let data = await indexService.addData(req.body);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_adding_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getKingdom(req,res){
    try {

      let data = await indexService.getKingdom(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getKingdomDesc(req,res){
    try {

      let data = await indexService.getKingdomDesc(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getRulerDesc(req,res){
    try {

      let data = await indexService.getRulerDesc(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getCenturies(req,res){
    try {

      let data = await indexService.getCenturies(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getKingdomsByYear(req,res){
    try {

      let data = await indexService.getKingdomsByYear(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getMaps(req,res){
    try {

      let data = await indexService.getMaps(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getKingdomWithRulers(req,res){
    try {
      let searches = [];
      if(req.query.search){
       searches = req.query.search.split(" ");
      } 

      opts={
        searches:searches
      }

      let data = await indexService.getKingdomWithRulers(opts);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getLiterature(req,res){
    try {

      let data = await indexService.getLiterature(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getGeofence(req,res){
    try {
      console.log("QUERY", req.query)

      let data = await indexService.getGeofence(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function socket_test(req,res){
    try {
      console.log("QUERY", req.query)

      socketService.emitSocket("createdSocket", {name: "pushpendra", age: 21, address: "Agra"});
      // socketService.listenSocket("createdSocket")
      console.log("socket complete")

      return responses.sendCustomSuccessResponse(res, language, {data: "success"});
    
    } catch (error) {
      logg.logError("error in socket", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function login(req,res){
    try {
     console.log("query", req.query)
     console.log("specific",typeof(req.query.latitude))
       
     let prevdata = await insertServices.getUserdata(req.query);

      let update = await insertServices.updateUsersData({id:prevdata[0].id, isLoggedin: 1, latitude: parseFloat(req.query.latitude), longitude: parseFloat(req.query.longitude)})

      let data = await insertServices.getUserdata(req.query);

      socketService.emitSocket("login", data[0]);
      return responses.sendCustomSuccessResponse(res, language, data);
    
      
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function logout(req,res){
    try {

      let update = await insertServices.updateUsersData({id:req.body.id, isLoggedin: req.body.isLoggedin})

      return responses.sendCustomSuccessResponse(res, language, {});
    
      
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
    }
  }

  async function getAllUsersData(req,res){
    try {

      let data = await insertServices.getUserdata(req.query);
      return responses.sendCustomSuccessResponse(res, language, data);
    
    } catch (error) {
      logg.logError("error_while_getting_data", error);
      return responses.sendCustomErrorResponse(res, language);
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
      getGeofence,
      socket_test,
      login,
      logout,
      getAllUsersData
  }