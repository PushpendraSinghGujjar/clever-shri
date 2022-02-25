const Joi = require('joi');

const logg = require('../../../services/logging');

const validator = require("../../../services/validator")

const language = "en";


function getData(req, res, next) {

  console.log("QuUERY***",req.query);
   
    let schemaObject = {
      id: Joi.number().optional()
    };
    const schema = Joi.object().keys(schemaObject);
  
    let validate = validator.validateRequest(req.query, schema, res, language);
    console.log("hh", validate);
  
    if (validate) {
      next();
    }
  };

  function addData(req, res, next) {
   
    let schemaObject = {
      name: Joi.string().required(),
      email: Joi.string().required(),
    };
    const schema = Joi.object().keys(schemaObject);
  
    let validate = validator.validateRequest(req.body, schema, res, language);
    console.log("hh", validate);
  
    if (validate) {
      next();
    }
  };

  module.exports = {
      getData,
      addData
  }