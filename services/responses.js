const constants = require("./../properties/constants");

const messages = require("./../messages/messages.json");
const logg = require("./logging");

function sendCustomSuccessResponse(resp, language, data, code, message) {
  
  const response = {
    statusCode: code || constants.responseCodes.SUCCESS,
    message:
    messages[language][message] || messages[language][constants.commonResponseMessages.SUCCESS],
    data: data || {}
  };
  resp.type('json');
  return resp.send(JSON.stringify(response));
}




function updatesSuccess(resp, language, data, code, message) {
  const response = {
    statusCode: code || constants.responseCodes.SUCCESS,
    message:
      message || messages[language][constants.commonResponseMessages.UPDATED],
    data: data || {}
  };
  resp.type('json');
  return resp.send(JSON.stringify(response));
};

function sendCustomErrorResponse(resp, language, code, message, data) {
  logg.log("IN_SEND_ERROR=>",message);
  const response = {
    statusCode: code || constants.responseCodes.SOMETHING_WENT_WRONG,
    message:
      messages[language][message] ||
      messages[language][constants.commonResponseMessages.SOMETHING_WENT_WRONG],
    data: data || {}
  };

  resp.statusCode = code || constants.responseCodes.SOMETHING_WENT_WRONG ;
  resp.type('json');
  
  return resp.send(JSON.stringify(response));
};

function sendCustomErrorResponseWithMessage(resp, language, code, message, data) {
  const response = {
    statusCode: code || constants.responseCodes.SOMETHING_WENT_WRONG,
    message: message , 
    data: data || {}
  };

  resp.statusCode = code || constants.responseCodes.SOMETHING_WENT_WRONG ;
  resp.type('json');
  
  return resp.send(JSON.stringify(response));
}





function parameterMissingError(resp, language, code, message, data) {
  const response = {
    statusCode: code || constants.responseCodes.SOMETHING_WENT_WRONG,
    message:
  message ||
      messages[language][constants.commonResponseMessages.SOMETHING_WENT_WRONG],
    data: data || {}
  };
  resp.statusCode = code || constants.responseCodes.SOMETHING_WENT_WRONG ;
  resp.type('json');
  return resp.send(JSON.stringify(response));
}

function sendQuarterResponseError(resp, language, code, message, validWeeks) {
  const response = {
    statusCode: code || constants.responseCodes.SOMETHING_WENT_WRONG,
    message:
      messages[language][message].replace("{VALID_WEEKS}", validWeeks) ||
      messages[language][constants.commonResponseMessages.SOMETHING_WENT_WRONG],
    data: data || {}
  };
  resp.type('json');  
  return resp.send(JSON.stringify(response));
}

module.exports = {
  sendCustomErrorResponse,
  sendCustomSuccessResponse,
  parameterMissingError,
  updatesSuccess,
  sendQuarterResponseError ,
  sendCustomErrorResponseWithMessage
};
