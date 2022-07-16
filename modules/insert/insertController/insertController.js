const logg = require('../../../services/logging');

const responses = require("../../../services/responses")
const insertServices = require("../insertServices/insertServices")
const kingdomData = require("../../../kingdoms.js");
const multer = require("multer");
const { response } = require('express');
const constants = require('../../../properties/constants');
let config = require('../../../config');
const awsservices = require('../../../services/awsservices')

const language = "en";


async function addBulkKingdom(req, res) {

  try {

    req.body.kingdom = kingdomData;

    let data = await insertServices.addBulkKingdom(req.body);
    return responses.sendCustomSuccessResponse(res, language, data);

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}

async function addLiterature(req, res) {

  try {

    // console.log(upload);
    // req.body.fileName = req.files[0].filename;
    // req.body.originalName = req.files[0].originalname;


    console.log("REQ******", req.files.file)
    console.log("RER******", req.body)
    console.log("REF",req.file)

    let upload = await awsservices.uploadS3Image(req.files.file);

    console.log("imageName", upload)
    req.body.originalName = req.files.file.originalFilename;
    req.body.fileName = `${config.config.s3Config.S3URL}${upload}`;
    console.log("imgUrl*****", req.body.fileName)


    let data = await insertServices.addLiterature(req.body);

    return responses.sendCustomSuccessResponse(res, language, "SUCCESS");

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}

async function addKingdom(req, res) {

  try {

    let data = await insertServices.addKingdom(req.body);

    if (!data.insertId) {
      return responses.sendCustomErrorResponse(res, language,
        constants.responseCodes.COMMON_ERROR_CODE,
        constants.commonResponseMessages.ACTION_FAILED);
    }

    let descdata = await insertServices.addKingdomDesc(req.body);

    return responses.sendCustomSuccessResponse(res, language, {data, descdata});

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}

async function addRuler(req, res) {

  try {

    let data = await insertServices.addRuler(req.body);

    if (!data.insertId) {
      return responses.sendCustomErrorResponse(res, language,
        constants.responseCodes.COMMON_ERROR_CODE,
        constants.commonResponseMessages.ACTION_FAILED);
    }

    let descdata = await insertServices.addRulerDesc(req.body);

    return responses.sendCustomSuccessResponse(res, language, {data, descdata});

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}

async function uploadImage(req, res) {

  try {

    console.log("file", req.files.file);

    // req.files = req.files[0];

    // req.body.fileName = req.files[0].filename;
    // req.body.originalName = req.files[0].originalname;
    let upload = await awsservices.uploadS3Image(req.files.file);

    // let data = await insertServices.addLiterature(req.body);
   console.log("success");
    return responses.sendCustomSuccessResponse(res, language, "SUCCESS");

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}

async function addGeofence(req, res) {

  try {

    req.body.latitude ? req.body.latitude : req.body.latitude = null;
    req.body.longitude ? req.body.longitude : req.body.longitude = null;

    let geofence = "POLYGON((";
    geoLongLat = req.body.latLong.forEach((co) => {
      geofence +=
        JSON.stringify(co).replace(",", " ").replace("]", "").replace("[", "") +
        ",";
    });
    geofence = geofence.slice(0, geofence.length - 1) + "))";

    logg.log("GEO_LAT_LONG_AFTER=>", geofence);
    req.body.latLong = geofence;


    let data = await insertServices.addGeofence(req.body);

    if (!data.insertId) {
      return responses.sendCustomErrorResponse(res, language,
        constants.responseCodes.COMMON_ERROR_CODE,
        constants.commonResponseMessages.ACTION_FAILED);
    }

    // let descdata = await insertServices.addKingdomDesc(req.body);

    return responses.sendCustomSuccessResponse(res, language, "success");

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}

async function register(req, res) {

  try {

    let data = await insertServices.register(req.body);

    if (!data.insertId) {
      return responses.sendCustomErrorResponse(res, language,
        constants.responseCodes.COMMON_ERROR_CODE,
        constants.commonResponseMessages.ACTION_FAILED);
    }

    let userdata = await insertServices.getUserdata({id: data.insertId})

    return responses.sendCustomSuccessResponse(res, language, {userdata});

  } catch (error) {
    logg.logError("error_while_getting_data", error);
    return responses.sendCustomErrorResponse(res, language);
  }
}


module.exports = {
  addBulkKingdom,
  addLiterature,
  addKingdom,
  addRuler,
  uploadImage,
  addGeofence,
  register
}