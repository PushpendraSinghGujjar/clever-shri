const logg = require('../../../services/logging');

const responses = require("../../../services/responses")
const insertServices = require("../insertServices/insertServices")
const kingdomData = require("../../../kingdoms.js");
const multer = require("multer");
const { response } = require('express');
const constants = require('../../../properties/constants')

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
    req.body.fileName = req.files[0].filename;
    req.body.originalName = req.files[0].originalname;

    console.log("REQ******", req.files)
    console.log("RER******", req.body)

    let data = await insertServices.addLiterature(req.body);

    return responses.sendCustomSuccessResponse(res, language, "abc");

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


module.exports = {
  addBulkKingdom,
  addLiterature,
  addKingdom

}