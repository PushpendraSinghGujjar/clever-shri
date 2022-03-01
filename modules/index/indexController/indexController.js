
const logg = require('../../../services/logging');

const responses = require("../../../services/responses")
const indexService = require("../indexServices/indexServices")

const language = "en";

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