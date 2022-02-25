const defaultLanguage = "en";

const responseCodes = {
  COMMON_ERROR_CODE: 400,
  SOMETHING_WENT_WRONG: 400,
  INVALID_PARAMS: 400,
  AUTHENTICATION_ERROR: 401,
  SUCCESS: 200,
};

const commonResponseMessages = {
  QUANTITY_IS_REQUIRED : "QUANTITY_IS_REQUIRED" ,
  INVALID_CREDENTAILS : "INVALID_CREDENTAILS" ,
  CANNOT_EDIT_ORDER : "CANNOT_EDIT_ORDER" ,
  SLOT_NOT_AVAILABLE : "SLOT_NOT_AVAILABLE" ,
  DELIVERY_NOW_IS_NOT_AVAILABLE : "DELIVERY_NOW_IS_NOT_AVAILABLE" ,
  JOB_CANNOT_BE_RATED : "JOB_CANNOT_BE_RATED" ,
  CANNOT_COMPLETE_PICKUP :"CANNOT_COMPLETE_PICKUP" ,
  INVALID_GOODFLEET_ID : "INVALID_GOODFLEET_ID" ,
  ADDITION_INFO_REQUIRED : "ADDITION_INFO_REQUIRED" ,
  ZERO_AMOUNT_PAYMENT : "ZERO_AMOUNT_PAYMENT" , 
  WALLET_AMOUNT_IS_SUFFICIENT : "WALLET_AMOUNT_IS_SUFFICIENT" ,
  UPDATE_ALL_PRODUCTS : "UPDATE_ALL_PRODUCTS" ,
  INVALID_BOOKED_PRODUCT_ID : "INVALID_BOOKED_PRODUCT_ID" ,
  ERROR_WHILE_SENDING_MESSAGE : "ERROR_WHILE_SENDING_MESSAGE" ,
  NO_SMS_GATEWAY_SELECTED : "NO_SMS_GATEWAY_SELECTED" ,
  MAX_SLOT_CANNOT_BE_LESS : "MAX_SLOT_CANNOT_BE_LESS" ,
  INVALID_CUSTOMER : "INVALID_CUSTOMER" ,
  LESS_AMOUNT_THEN_REQUIRED : "LESS_AMOUNT_THEN_REQUIRED" ,
  INVALID_SUPERCAT_ID: "INVALID_SUPERCAT_ID",
  DUPLICATE_SUPER_CAT_FOUND: "DUPLICATE_SUPER_CAT_FOUND",
  PROMO_CODE_CANNOT_BE_APPLIED: "PROMO_CODE_CANNOT_BE_APPLIED",
  END_DATE_CANNOT_BE_LESS: "END_DATE_CANNOT_BE_LESS",
  DISCOUNT_SHOULD_BE_LESS_THAN_100: "DISCOUNT_SHOULD_BE_LESS_THAN_100",
  NO_PRODUCT_FOUND: "NO_PRODUCT_FOUND",
  DUPLICATE_PRODUCT_FOUND_WITH_BARCODE: "DUPLICATE_PRODUCT_FOUND_WITH_BARCODE",
  BRANCH_DISABLED: "BRANCH_DISABLED",
  CANNOT_CREATE_SCHEDULER_BOOKING: "CANNOT_CREATE_SCHEDULER_BOOKING",
  SUBADMIN_BLOCKED: "SUBADMIN_BLOCKED",
  GEOFENCE_ALREADY_EXISTS: "GEOFENCE_ALREADY_EXISTS",
  PRODUCT_ALREADY_ADDED_IN_LIST: "PRODUCT_ALREADY_ADDED_IN_LIST",
  PASSWORD_CHANGED: "PASSWORD_CHANGED",
  OUTSIDE_SERVING_AREA: "OUTSIDE_SERVING_AREA",
  CANNOT_DELETE_SLOT: "CANNOT_DELETE_SLOT",
  ALREADY_CANCELLED: "ALREADY_CANCELLED",
  CANNOT_ASSIGN_PICKER_BEFORE_TIME: "CANNOT_ASSIGN_PICKER_BEFORE_TIME",
  REFFERAL_SETTINGS_NOT_FOUND: "REFFERAL_SETTINGS_NOT_FOUND",
  INVALID_REFFERAL_CODE: "INVALID_REFFERAL_CODE",
  INVALID_SCHEDULER_BOOKING_ID: "INVALID_SCHEDULER_BOOKING_ID",
  DIFFERENT_BRANCH_EXISTS: "DIFFERENT_BRANCH_EXISTS",
  ERROR_WHILE_PARSING_PRODUCTS: "ERROR_WHILE_PARSING_PRODUCTS",
  SCHEDULE_ORDER_PROMO: "SCHEDULE_ORDER_PROMO",
  UNABLE_TO_CONFIRM: "UNABLE_TO_CONFIRM",
  BOOKING_LIMIT_EXCEEDES: "BOOKING_LIMIT_EXCEEDES",
  UNABLE_TO_CREATE_BOOKING: "UNABLE_TO_CREATE_BOOKING",
  UNABLE_TO_INSERT_ADDRESS: "UNABLE_TO_INSERT_ADDRESS",
  INVALID_BOOKING_TYPE: "INVALID_BOOKING_TYPE",
  FAILED_TO_SEND_SMS: "FAILED_TO_SEND_SMS",
  PICKER_BLOCKED: "PICKER_BLOCKED",
  CUSTOMER_BLOCKED: "CUSTOMER_BLOCKED",
  FAILED_TO_ADD_CART: "FAILED_TO_ADD_CART",
  INVALID_RESET_PASSWORD_TOKEN: "INVALID_RESET_PASSWORD_TOKEN",
  UNABLE_TO_RESEND_OTP: "UNABLE_TO_RESEND_OTP",
  DUPLICATE_BRAND_ID: "DUPLICATE_BRAND_ID",
  INVALID_BRAND_ID: "INVALID_BRAND_ID",
  PROMO_CODE_EXPIRED: "PROMO_CODE_EXPIRED",
  PHONE_NOT_VERIFIED: "PHONE_NOT_VERIFIED",
  INVALID_PROMO_CODE: "INVALID_PROMO_CODE",
  INVALID_PHONE_NUMBER: "INVALID_PHONE_NUMBER",
  INVALID_OTP_CODE: "INVALID_OTP_CODE",
  INVALID_PRODUCTS_ON_EDIT: "INVALID_PRODUCTS_ON_EDIT",
  CANNOT_ASSIGN_PICKER: "CresponseCodesSTOMER_ID_REQUIRED",
  NO_STORE_FOUND: "NO_STORE_FOUND",
  ALL_ITEMS_ARE_NOT_PICKED: "ALL_ITEMS_ARE_NOT_PICKED",
  ALREADY_PICKED: "ALREADY_PICKED",
  QUANTITY_EXCEEDS: "QUANTITY_EXCEEDS",
  ALREADY_ACCEPTED: "ALREADY_ACCEPTED",
  JOB_NOT_AVAILABLE: "JOB_NOT_AVAILABLE",
  PICKER_DISABLED: "PICKER_DISABLED",
  PICKER_HAS_ACTIVE_BOOKINGS: "PICKER_HAS_ACTIVE_BOOKINGS",
  INVALID_PICKER_ID: "INVALID_PICKER_ID",
  SOME_BRANCH_IDS_MISSING: "SOME_BRANCH_IDS_MISSING",
  INSUFFICIENT_WALLET_AMOUNT: "INSUFFICIENT_WALLET_AMOUNT",
  INVALID_LIST_ID: "INVALID_LIST_ID",
  PRODUCT_ALREADY_ADDED: "PRODUCT_ALREADY_ADDED",
  DUPLICATE_LIST_NAME: "DUPLICATE_LIST_NAME",
  CANNOT_CANCEL_ORDER: "CANNOT_CANCEL_ORDER",
  INVALID_BOOKING_ID: "INVALID_BOOKING_ID",
  PAYMENT_NOT_COMPLETED: "PAYMENT_NOT_COMPLETED",
  ORDER_ID_IS_REQUIRED: "ORDER_ID_IS_REQUIRED",
  FAILED_TO_CREATE_SESSION: "FAILED_TO_CREATE_SESSION",
  DUPLICATE_PRODUCT_IN_CART: "DUPLICATE_PRODUCT_IN_CART",
  NO_CATEGORY_FOUND: "NO_CATEGORY_FOUND",
  INVALID_HEADERS: "INVALID_HEADERS",
  EMPTY_CSV: "EMPTY_CSV",
  INVALID_FILE_SIZE: "INVALID_FILE_SIZE",
  INVALID_FILE_TYPE: "INVALID_FILE_TYPE",
  INVALID_FILE: "INVALID_FILE",
  NO_FILE_PROVIDED: "NO_FILE_PROVIDED",
  CAT_SUBCAT_REQUIRED: "CAT_SUBCAT_REQUIRED",
  INVALID_PRODUCT_ID: "INVALID_PRODUCT_ID",
  DUPLICATE_PRODUCT_FOUND: "DUPLICATE_PRODUCT_FOUND",
  SOME_CATEGORIES_ARE_INVALID: "SOME_CATEGORIES_ARE_INVALID",
  INVALID_CATEGORY_IDS: "INVALID_CATEGORY_IDS",
  INVALID_CATEGORY_ID: "INVALID_CATEGORY_ID",
  DUPLICATE_CATEGORY_EXISTS: "DUPLICATE_CATEGORY_EXISTS",
  INVALID_PRODUCTS: "INVALID_PRODUCTS",
  ONLY_ONE_BRANCH_ALLOWED: "ONLY_ONE_BRANCH_ALLOWED",
  ITEM_NOT_FOUND: "ITEM_NOT_FOUND",
  EMPTY_CART: "EMPTY_CART",
  SLOT_ALREADY_EXISTS: "SLOT_ALREADY_EXISTS",
  ALL_ITEMS_ARE_NOT_PICKED: "ALL_ITEMS_ARE_NOT_PICKED",
  ALREADY_PICKED: "ALREADY_PICKED",
  QUANTITY_EXCEEDS: "QUANTITY_EXCEEDS",
  ALREADY_ACCEPTED: "ALREADY_ACCEPTED",
  JOB_NOT_AVAILABLE: "JOB_NOT_AVAILABLE",
  PICKER_DISABLED: "PICKER_DISABLED",
  PICKER_HAS_ACTIVE_BOOKINGS: "PICKER_HAS_ACTIVE_BOOKINGS",
  INVALID_PICKER_ID: "INVALID_PICKER_ID",
  SOME_BRANCH_IDS_MISSING: "SOME_BRANCH_IDS_MISSING",
  INSUFFICIENT_WALLET_AMOUNT: "INSUFFICIENT_WALLET_AMOUNT",
  INVALID_LIST_ID: "INVALID_LIST_ID",
  PRODUCT_ALREADY_ADDED: "PRODUCT_ALREADY_ADDED",
  DUPLICATE_LIST_NAME: "DUPLICATE_LIST_NAME",
  CANNOT_CANCEL_ORDER: "CANNOT_CANCEL_ORDER",
  INVALID_BOOKING_ID: "INVALID_BOOKING_ID",
  PAYMENT_NOT_COMPLETED: "PAYMENT_NOT_COMPLETED",
  ORDER_ID_IS_REQUIRED: "ORDER_ID_IS_REQUIRED",
  FAILED_TO_CREATE_SESSION: "FAILED_TO_CREATE_SESSION",
  DUPLICATE_PRODUCT_IN_CART: "DUPLICATE_PRODUCT_IN_CART",
  NO_CATEGORY_FOUND: "NO_CATEGORY_FOUND",
  INVALID_HEADERS: "INVALID_HEADERS",
  EMPTY_CSV: "EMPTY_CSV",
  INVALID_FILE_SIZE: "INVALID_FILE_SIZE",
  INVALID_FILE_TYPE: "INVALID_FILE_TYPE",
  INVALID_FILE: "INVALID_FILE",
  NO_FILE_PROVIDED: "NO_FILE_PROVIDED",
  CAT_SUBCAT_REQUIRED: "CAT_SUBCAT_REQUIRED",
  INVALID_PRODUCT_ID: "INVALID_PRODUCT_ID",
  DUPLICATE_PRODUCT_FOUND: "DUPLICATE_PRODUCT_FOUND",
  SOME_CATEGORIES_ARE_INVALID: "SOME_CATEGORIES_ARE_INVALID",
  INVALID_CATEGORY_IDS: "INVALID_CATEGORY_IDS",
  INVALID_CATEGORY_ID: "INVALID_CATEGORY_ID",
  DUPLICATE_CATEGORY_EXISTS: "DUPLICATE_CATEGORY_EXISTS",
  INVALID_PRODUCTS: "INVALID_PRODUCTS",
  ONLY_ONE_BRANCH_ALLOWED: "ONLY_ONE_BRANCH_ALLOWED",
  ITEM_NOT_FOUND: "ITEM_NOT_FOUND",
  EMPTY_CART: "EMPTY_CART",
  // OYELAB PROD_MESSAGES
  DUPLICATE_CUSTOMER: "DUPLICATE_CUSTOMER",
  LOGIN_PARAM_MISSING: "LOGIN_PARAM_MISSING",
  INVALID_SOCIAL_ID: "INVALID_SOCIAL_ID",
  INVALID_COUNTRY_CODE: "INVALID_COUNTRY_CODE",
  INVALID_EMAIL_FORMAT: "INVALID_EMAIL_FORMAT",
  DUPLICATE_PHONE_EXISTS: "DUPLICATE_PHONE_EXISTS",
  DUPLICATE_EMAIL_EXISTS: "DUPLICATE_EMAIL_EXISTS",
  DUPLICATE_CUTOMER_WITH_SOCIAL_MODE: "DUPLICATE_CUTOMER_WITH_SOCIAL_MODE",
  PASSWORD_NOT_ALLOWED: "PASSWORD_NOT_ALLOWED",
  SOCIAL_MODE_REQUIRED: "SOCIAL_MODE_REQUIRED",
  LOGIN_SUCCESS: "LOGIN SUCCESSFULLY",
  LOGIN_FAILURE: "INVALID EMAIL OR PASSWORD",
  INVALID_OVERALL_PLAN_ID: "INVALID_OVERALL_PLAN_ID",
  OVERALL_PLAN_ID: "OVERALL_PLAN_ID",
  CURRENCY_DATES_OVERLAPS: "CURRENCY_DATES_OVERLAPS",
  TARGET_AMOUNT_CANNOT_BE_LESS: "TARGET_AMOUNT_CANNOT_BE_LESS",
  NO_HISTORICAL_DATA_FOUND: "NO_HISTORICAL_DATA_FOUND",
  NO_FISCAL_DATA_FOUND: "NO_FISCAL_DATA_FOUND",
  NO_MAPPED_YEAR_FOUND: "NO_MAPPED_YEAR_FOUND",
  INVALID_SCENERIO_ID: "INVALID_SCENERIO_ID",
  NO_DATA_FOUND: "NO_DATA_FOUND",
  NO_FISCAL_YEAR_FOUND: "NO_FISCAL_YEAR_FOUND",
  NOT_VALID_QUATERS: "NOT_VALID_QUATERS",
  INVALID_INVENTORY_HEADERS: "INVALID_INVENTORY_HEADERS",
  INVALID_SUPPLIER_ID: "INVALID_SUPPLIER_ID",
  MERCHANDISE_ID_NOT_VALID: "MERCHANDISE_ID_NOT_VALID",
  RETAIL_STORE_ID_NOT_VALID: "RETAIL_STORE_ID_NOT_VALID",
  MAPPING_NOT_THERE: "MAPPING_NOT_THERE",
  NOT_VALID_QUARTER_SUM: "NOT_VALID_QUARTER_SUM",
  SAME_PASSWORD: "SAME_PASSWORD",
  INVALID_DATASET_ID: "Invalid Sheet Id",
  SOMETHING_WENT_WRONG: "SOMETHING_WENT_WRONG",
  INVALID_PARAMS: "INVALID_PARAMS",
  SUCCESS: "SUCCESS",
  INVALID_EMAIL: "INVALID_EMAIL",
  INCORRECT_PASSWORD: "INCORRECT_PASSWORD",
  AUTHENTICATION_ERROR: "AUTHENTICATION_ERROR",
  DUBLICATE_COMPANY_NAME: "DUPLICATE_COMPANY_NAME",
  ACTION_FAILED: "ACTION_FAILED",
  NO_TRANSACTION_PROVIDED: "NO_TRANSACTION_PROVIDED",
  DUBLICATE_COMP_DOMAIN: "DUPLICATE_COMP_DOMAIN",
  DUBLICATE_ADMIN_EMAIL: "DUPLICATE_ADMIN_EMAIL",
  INVALID_COMP_ID: "INVALID_COMP_ID",
  COMPANY_MASTER_ADMIN_MAPPING_FAILED: "COMPANY_MASTER_ADMIN_MAPPING_FAILED",
  INVALID_LOGIN_DOMAIN: "INVALID_LOGIN_DOMAIN",
  INVALID_USER_ID: "INVALID_USER_ID",
  PASSWORD_TOKEN_IS_INVALID: "PASSWORD_TOKEN_IS_INVALID",
  FAILED_TO_UPLOAD_IMAGE: "FAILED_TO_UPLOAD_IMAGE",
  FILE_SIZE_EXCEEDS: "FILE_SIZE_EXCEEDS",
  DOMAIN_NAME_IS_REQUIRED: "DOMAIN_NAME_IS_REQUIRED",
  INVALID_COMPANY_ID: "INVALID_COMP_ID",
  GOOGLE_TOKEN_NOT_AUTHERISED: "GOOGLE_TOKEN_NOT_AUTHORISED",
  INVALID_SPREAD_SHEET_ID: "INVALID_SPREAD_SHEET_ID",
  FAILED_TO_SAVE_SPREADSHEET_INFO: "FAILED_TO_SAVE_SPREADSHEET_INFO",
  SHEET_DOES_NOT_EXISTS: "SHEET_DOES_NOT_EXISTS",
  SHEET_DATA_ALREADY_ADDED: "SHEET_DATA_ALREADY_ADDED",
  SHEET_ALREADY_ADDED: "SHEET_ALREADY_ADDED",
  NO_FILES_FOUND: "NO_FILES_FOUND",
  USER_NOT_MAPPED: "USER_NOT_MAPPED",
  GOOGLE_ACCOUNT_ALREADY_AUTHERISED: "GOOGLE_ACCOUNT_ALREADY_AUTHORISED",
  UPDATED: "UPDATED",
  SLOT_ALREADY_EXISTS: "SLOT_ALREADY_EXISTS",
  INVALID_ADMIN_ID: "INVALID_ADMIN_ID",
  INVALID_LIMIT: "INVALID_LIMIT",
  INVALID_BRANCH_ID: "INVALID_BRANCH_ID",
  INVLID_AVAIL_ID: "INVLID_AVAIL_ID",
  DUPLICATE_BRANCH_EMAIL: "DUPLICATE_BRANCH_EMAIL",
  POLYGON_ALREADY_EXISTS: "POLYGON_ALREADY_EXISTS",
  INVALID_GEOFENCE_ID: "INVALID_GEOFENCE_ID",
  DUPLICATE_PROMOCODE: "DUPLICATE_PROMOCODE",
  DUPLICATE_PROMOCODE_ID: "DUPLICATE_PROMOCODE_ID",
  NO_AVAILABILITY_SLOT_FOUND: "NO_AVAILABILITY_SLOT_FOUND",
  DUPLICATE_ROLE: "ROLE/ITEM_ALREADY_EXITS",
  INVALID_MENUID: "NO ROLE WITH THAT MENUID EXISTS",
  INVALID_USER_TYPE: "INVALID_USER_TYPE",
  ROLES_ALREADY_EXISTS: "ROLES_ALREADY_EXISTS",
  DUPLICATE_ADIN_EMAIL: "DUPLICATE_ADIN_EMAIL",
  DUPLICATE_ADIN_PHONE: "DUPLICATE_ADIN_PHONE",
  INVALID_SLOT: "INVALID_SLOT",
  INVALID_SLOT_ID: "INVALID_SLOT_ID",
  SLOT_NOT_FOUND: "SLOT_NOT_FOUND",
  INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE",
  NO_DRIVER_TEAMS_FOUND: "NO_DRIVER_TEAMS_FOUND",
  CONTRACTOR_NOT_FOUND: "CONTRACTOR_NOT_FOUND",
  QUOTATION_IS_ALREADY_REJECTED: "QUOTATION_IS_ALREADY_REJECTED"
};

const userRoles = {
  ADMIN: 0,
  COMAPNY_SUPER_ADMIN: 1,
  COMPANY_USER: 2,
};

const defaultDataSetType = {
  SOURCE: "Source",
};

const connectors = {
  GOOGLE: "Google connector",
};
const protocols = {
  HTTP: "http",
};

const becryptData = {
  saltRounds: 10,
};

const sessionData = {
  EXPIRES_TIME: 604800,
  JWT_SECREKT_KEY:
    "jsdsjdkahsufhuedmemoskeneses232jkdwye283742sbhd382743242egfjhshsjdls",
};

const s3BucketName = "";

const emailTemplatesKeys = {
  welcomeEmail: "welcomeEmail",
  resetPassword: "resetPassword",
  exportSheetEmail: "exportSheetEmail",
  newCompanyAdminInviteEmail: "newCompanyAdminInviteEmail",
  requestConnectorEmail: "requestConnectorEmail",
};

const schedulerData = {
  validMonths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  validWeeks: [0, 1, 2, 3, 4, 5, 6, 7],
  validInstances: [0, 1, 2, 3, 4, 5, 6],
};

const emailHtmlTemplates = {
  resetPassword: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 600px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
  <style type="text/css">
body, p, div {
  font-family: arial,helvetica,sans-serif;
  font-size: 14px;
}
body {
  color: #000000;
}
body a {
  color: #8091c9;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .social-icon-column {
    display: inline-block !important;
  }
}
</style>
  <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Muli|Playfair+Display&display=swap" rel="stylesheet"><style>
h1 {
font-family: 'Playfair Display', serif;
}

h6 {
font-family: 'Muli', sans-serif;
}

</style><!--End Head user entered-->
</head>
<body>
  <center class="wrapper" data-link-color="#8091c9" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#e5e5e5;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#e5e5e5">
        <tbody><tr>
          <td valign="top" bgcolor="#e5e5e5" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
              <tbody><tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tbody><tr>
                      <td>
                        <!--[if mso]>
<center>
<table><tr><td width="600">
<![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                  <tbody><tr>
                                    <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
  <td role="module-content">
    <p></p>
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="6f21ca2f-f603-414b-97cf-67eb9f75041b">
<tbody>
  <tr>
    <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#e5e5e5">
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e24f119f-1e1a-4f03-96ec-bbc4af4fbb6c">
<tbody>
  <tr>
    <td style="padding:0px 0px 90px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="abefebaf-756d-4470-9e34-f875fac48926">
<tbody>
  <tr>
    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
      <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:25% !important; width:25%; height:auto !important;" width="150" alt="Moskenes" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/707eaffa8ef2335a/d463c668-f2f0-4e53-9a4b-598ba950141a/412x76.png">
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="30054a86-2c34-45e8-9af6-81d0bf456bbc" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:60px 0px 0px 20px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: inherit"><span style="font-family: inherit; color: #202020; font-size: 22px">Password Reset</span></h1><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="17604bc1-2e25-42cb-aded-4f362a7a6152" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:0px 0px 18px 20px; line-height:15px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><h6 style="text-align: inherit"><span style="font-family: inherit; color: #777777; font-size: 13px">To reset your password, please click the link below.<br>
<br>
If you did not request a password reset, please ignore this email<br>
and your password will not change.</span></h6><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="730e9cf0-0862-4e58-9bf3-7c1d89b07409">
<tbody>
  <tr>
    <td style="padding:0px 0px 70px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ef3db6bd-d700-4a17-83d3-1ac5df1d8985">
<tbody>
  <tr>
    <td style="font-size:6px; line-height:10px; padding:0px 0px 70px 20px;" valign="top" align="left">
      <a href={redirect_link} target="_blank"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:45% !important; width:45%; height:auto !important;" width="270" alt="Reset Password" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/707eaffa8ef2335a/9e934db7-153a-44a3-8aa1-897e759b95dd/664x80.png"></a>
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="fa4c992e-af10-4ba9-bf9d-c6962304617f">
<tbody>
  <tr>
    <td style="padding:0px 0px 600px 0px;" role="module-content" bgcolor="#e5e5e5">
    </td>
  </tr>
</tbody>
</table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#e5e5e5; color:#444444; font-size:12px; line-height:20px; padding:0px 0px 0px 0px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                        <div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div>
                                        <p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p>
                                      </div></td>
                                  </tr>
                                </tbody></table>
                                <!--[if mso]>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </div>
  </center>


</body></html>
    `,
  welcomeEmail: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
body {width: 600px;margin: 0 auto;}
table {border-collapse: collapse;}
table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
  <style type="text/css">
body, p, div {
  font-family: arial,helvetica,sans-serif;
  font-size: 14px;
}
body {
  color: #000000;
}
body a {
  color: #8091c9;
  text-decoration: none;
}
p { margin: 0; padding: 0; }
table.wrapper {
  width:100% !important;
  table-layout: fixed;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
img.max-width {
  max-width: 100% !important;
}
.column.of-2 {
  width: 50%;
}
.column.of-3 {
  width: 33.333%;
}
.column.of-4 {
  width: 25%;
}
@media screen and (max-width:480px) {
  .preheader .rightColumnContent,
  .footer .rightColumnContent {
    text-align: left !important;
  }
  .preheader .rightColumnContent div,
  .preheader .rightColumnContent span,
  .footer .rightColumnContent div,
  .footer .rightColumnContent span {
    text-align: left !important;
  }
  .preheader .rightColumnContent,
  .preheader .leftColumnContent {
    font-size: 80% !important;
    padding: 5px 0;
  }
  table.wrapper-mobile {
    width: 100% !important;
    table-layout: fixed;
  }
  img.max-width {
    height: auto !important;
    max-width: 100% !important;
  }
  a.bulletproof-button {
    display: block !important;
    width: auto !important;
    font-size: 80%;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .columns {
    width: 100% !important;
  }
  .column {
    display: block !important;
    width: 100% !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .social-icon-column {
    display: inline-block !important;
  }
}
</style>
  <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Muli|Playfair+Display&display=swap" rel="stylesheet"><style>
h1 {
font-family: 'Playfair Display', serif;
}

h6 {
font-family: 'Muli', sans-serif;
}

</style><!--End Head user entered-->
</head>
<body>
  <center class="wrapper" data-link-color="#8091c9" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#e5e5e5;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#e5e5e5">
        <tbody><tr>
          <td valign="top" bgcolor="#e5e5e5" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
              <tbody><tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tbody><tr>
                      <td>
                        <!--[if mso]>
<center>
<table><tr><td width="600">
<![endif]-->
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                  <tbody><tr>
                                    <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
<tbody><tr>
  <td role="module-content">
    <p></p>
  </td>
</tr>
</tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="6f21ca2f-f603-414b-97cf-67eb9f75041b">
<tbody>
  <tr>
    <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#e5e5e5">
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e24f119f-1e1a-4f03-96ec-bbc4af4fbb6c">
<tbody>
  <tr>
    <td style="padding:0px 0px 90px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="abefebaf-756d-4470-9e34-f875fac48926">
<tbody>
  <tr>
    <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
      <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:25% !important; width:25%; height:auto !important;" width="150" alt="Moskenes" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/707eaffa8ef2335a/d463c668-f2f0-4e53-9a4b-598ba950141a/412x76.png">
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="30054a86-2c34-45e8-9af6-81d0bf456bbc" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:60px 0px 0px 20px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: inherit"><span style="font-family: inherit; color: #202020; font-size: 22px">Welcome</span></h1><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="17604bc1-2e25-42cb-aded-4f362a7a6152" data-mc-module-version="2019-10-22">
<tbody>
  <tr>
    <td style="padding:0px 0px 18px 20px; line-height:13px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: inherit; color: #777777; font-size: 13px">Your company admin has invited you to join the team</span></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: inherit; color: #777777; font-size: 13px">using Moskenes merchandise management platform.</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: inherit; color: #777777; font-size: 13px">Click through the below link to complete the creation of<br>
your user account.</span></div><div></div></div></td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="730e9cf0-0862-4e58-9bf3-7c1d89b07409">
<tbody>
  <tr>
    <td style="padding:0px 0px 70px 0px;" role="module-content" bgcolor="">
    </td>
  </tr>
</tbody>
</table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ef3db6bd-d700-4a17-83d3-1ac5df1d8985">
<tbody>
  <tr>
    <td style="font-size:6px; line-height:10px; padding:0px 0px 70px 20px;" valign="top" align="left">
      <a href={redirect_link} target="_blank"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:45% !important; width:45%; height:auto !important;" width="270" alt="Reset Password" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/707eaffa8ef2335a/930369ce-8840-4783-b0c0-fee046293a77/664x80.png"></a>
    </td>
  </tr>
</tbody>
</table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="fa4c992e-af10-4ba9-bf9d-c6962304617f">
<tbody>
  <tr>
    <td style="padding:0px 0px 600px 0px;" role="module-content" bgcolor="#e5e5e5">
    </td>
  </tr>
</tbody>
</table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#e5e5e5; color:#444444; font-size:12px; line-height:20px; padding:0px 0px 0px 0px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                        <div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div>
                                        <p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p>
                                      </div></td>
                                  </tr>
                                </tbody></table>
                                <!--[if mso]>
                              </td>
                            </tr>
                          </table>
                        </center>
                        <![endif]-->
                      </td>
                    </tr>
                  </tbody></table>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>
      </tbody></table>
    </div>
  </center>


</body></html>`,

  newCompanyAdminInviteEmail: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #8091c9;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Muli|Playfair+Display&display=swap" rel="stylesheet"><style>
h1 {
font-family: 'Playfair Display', serif;
}

h6 {
font-family: 'Muli', sans-serif;
}

</style><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#8091c9" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#e5e5e5;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#e5e5e5">
            <tbody><tr>
              <td valign="top" bgcolor="#e5e5e5" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tbody><tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tbody><tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tbody><tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#ffffff" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tbody><tr>
      <td role="module-content">
        <p></p>
      </td>
    </tr>
  </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="6f21ca2f-f603-414b-97cf-67eb9f75041b">
    <tbody>
      <tr>
        <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="#e5e5e5">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="e24f119f-1e1a-4f03-96ec-bbc4af4fbb6c">
    <tbody>
      <tr>
        <td style="padding:0px 0px 90px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody>
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="abefebaf-756d-4470-9e34-f875fac48926">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:25% !important; width:25%; height:auto !important;" width="150" alt="Moskenes" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/707eaffa8ef2335a/d463c668-f2f0-4e53-9a4b-598ba950141a/412x76.png">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="30054a86-2c34-45e8-9af6-81d0bf456bbc" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:60px 0px 0px 20px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h1 style="text-align: inherit"><span style="font-family: inherit; color: #202020; font-size: 22px">Welcome</span></h1><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="17604bc1-2e25-42cb-aded-4f362a7a6152" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:0px 0px 18px 20px; line-height:13px; text-align:inherit; background-color:#ffffff;" height="100%" valign="top" bgcolor="#ffffff" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: inherit; color: #777777; font-size: 13px">An environment has been created for your company.</span></div>
<div style="font-family: inherit; text-align: inherit"><br></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: inherit; color: #777777; font-size: 13px">Click through the below link to complete the creation of<br>
your user account.</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="730e9cf0-0862-4e58-9bf3-7c1d89b07409">
    <tbody>
      <tr>
        <td style="padding:0px 0px 70px 0px;" role="module-content" bgcolor="">
        </td>
      </tr>
    </tbody>
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ef3db6bd-d700-4a17-83d3-1ac5df1d8985">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 70px 20px;" valign="top" align="left">
          <a href={redirect_link} target="_blank"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:45% !important; width:45%; height:auto !important;" width="270" alt="Reset Password" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/707eaffa8ef2335a/930369ce-8840-4783-b0c0-fee046293a77/664x80.png"></a>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="fa4c992e-af10-4ba9-bf9d-c6962304617f">
    <tbody>
      <tr>
        <td style="padding:0px 0px 600px 0px;" role="module-content" bgcolor="#e5e5e5">
        </td>
      </tr>
    </tbody>
  </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="background-color:#e5e5e5; color:#444444; font-size:12px; line-height:20px; padding:0px 0px 0px 0px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                                            <div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div>
                                            <p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p>
                                          </div></td>
                                      </tr>
                                    </tbody></table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </div>
      </center>
    
  
</body></html>
    `,
  requestConnectorEmail: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html
  data-editor-version="2"
  class="sg-campaigns"
  xmlns="http://www.w3.org/1999/xhtml"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

    <style>
        .container {
            width: 60%;
            margin: 0 auto;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }

        h1 {
            text-align: center;
            background: rgb(84,114,232);
background: linear-gradient(333deg, rgba(84,114,232,1) 0%, rgba(79,54,157,1) 100%, rgba(0,212,255,1) 100%);
            color: #efefef;
            padding: 1rem;
        }

        .content-container {
            padding: 1rem;
        }

        .assembly-label {
            font-size: 1.5rem;
            padding: 1rem;
        }

        .entry {
            padding: 0.5rem 1rem;
        }
    </style>
  </head>
  <body>
      <main class="container">
        <h1>Moskenes</h1>
        <div class="content-container">
                <header class="assembly-label">Connector Request from {assembly_label}</header>

            <div class="entry">
                <p><b>Requested Platform:</b> {platform_name}</p>
            </div>
            <div class="entry">
                <p><b>Data Kind:</b> {data_kind}</p>
            </div>
            <div class="entry">
                <p><b>Currently Using:</b> {currently_using}</p>
            </div>
        </div>
      </main>
  </body>
</html>
`,
};

const emailTemplates = {
  exportSheetEmail: {
    subject: "DATA EXPORTED FILE",
    email:
      "Hi , <a href='{{sheet_data}}'>click here</a>  to download the data list",
  },
  welcomeEmail: {
    subject: "Moskenes - Merch Planning Platform - Invitation",
    email: emailHtmlTemplates.welcomeEmail,
  },
  resetPassword: {
    subject: "Reset your password",
    email: emailHtmlTemplates.resetPassword,
  },

  newCompanyAdminInviteEmail: {
    subject: "Moskenes - Merch Planning Platform - Invitation",
    email: emailHtmlTemplates.newCompanyAdminInviteEmail,
  },

  requestConnectorEmail: {
    subject: "Moskenes - New Connector Request",
    email: emailHtmlTemplates.requestConnectorEmail,
  },
};

const cronNames = {
  REFRESH_TOKEN: "REFRESH_ACCESS_TOKEN",
  RESYNC_SHEET: "RESYNC_SHEET",
};

const days = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THUS",
  5: "FRI",
  6: "SAT",
};

const months = {
  0: "JAN",
  1: "FEB",
  2: "MARCH",
  3: "APRIL",
  4: "MAY",
  5: "JUNE",
  6: "JULY",
  7: "AUG",
  8: "SEP",
  9: "OCT",
  10: "NOV",
  11: "DEC",
};

const merchandiseColumns = {
  0: "category",
  1: "department",
  2: "division",
};

const sheetType = {
  inventory: 0,
  sales: 1,
  purchaseOrder: 2,
};

const inventoryColumns = {
  location_code: "location_code",
  location_name: "location_name",
};

const settingsType = {
  retailStoreManagement: 0,
  merchandiseManagement: 1,
  supplierManagemenet: 2,
};

const cronApis = {
  resynctSheet: "http://localhost:3000/company/resyncSheetData",
  refreshTokens: "http://localhost:3000/googleSheets/refreshAccessTokens",
};

const requestMethods = {
  post: "post",
  get: "get",
  put: "put",
};

const intervalApproaches = {
  FULL: 0,
  HALF: 1,
  QUATERLY: 2,
};

const validChannels = {
  RETAIL: 0,
  WHOLE_SALE: 1,
};

const division = {
  BRANDED: 0,
  VERTICAL: 1,
};

const channelsStringMapping = {
  Retail: 0,
  Wholesale: 1,
};
const divisionsStringMapping = {
  Vertical: 0,
  Branded: 1,
};

const intervalPrefix = {
  0: "F",
  1: "H",
  2: "Q",
};

const yearEndInterval = "Total";

const topDownSteps = {
  CHANNEL: 0,
  RETAIL: 1,
  WHOLESALE: 2,
  CLOSING_INVENTORY: 3,
};

const priceStatus = {
  MARK_DOWN: "MD",
  FP: "FP",
};

const soSubType = {
  INDENT: 0,
  INSEASON: 1,
};

const mysqlTablesBYStep = {
  0: "top_down_planning_channel",
  1: "top_down_planning_retail",
  2: "top_down_planning_wholesale",
};

const exchangeRateTypes = {
  SALES: 0,
  PURCHASE_ORDER: 1,
};

const defaultDaysMargin = {
  RETAIL_DAYS_MARGIN: 7,
  WHOLESALE_DAYS_MARGIN: 30,
};

const planTypes = {
  0: "Actual",
  1: "Budget",
  2: "Forecast",
};

const SOCIAL_TYPE = {
  FACEBOOK: "Facebook",
  GOOGLE_PLUS: "Google plus",
  TWITTER: "Twitter",
  INSTAGRAM: "Instagram",
  APPLE : "Apple"
};

const gender = {
  MALE: "Male",
  FEMALE: "Female",
};

const gatewayType = {
  TWILIO: 0,
  TWO_FACTOR : 1
};

const smsNotificationsTypes = {
  VERFICATION_CODE_MESSAGE: "VERFICATION_CODE_MESSAGE",
  FORGOT_PASSWORD_LINK: "FORGOT_PASSWORD_LINK",
};

const userTypes = {
  ADMIN: 0,
  BRANCH: 1,
  CUSTOMER: 2,
  PICKER: 3,
  SUBADMIN: 4,
  CONTRACTOR: 5
};

const deviceTypes = {
  IOS: "IOS",
  ANDROID: "ANDROID",
  WEB: "WEB",
};

const deviceTypesConstants = {
  IOS : 0,
  ANDROID : 1 
}

const csvSize = {
  MINIMUM: 0,
  MAXIMUM: 5 * 1024 * 1024,
};

// IF YOU ARE  CHANGING THE ORDER OF HEADERS , CHANGE THE ORDER OF COLUMNS IN API ACCORDINGLY
const productCsvColumns =[
  'categoryName',
  'categoryNameAr',
  'categoryIcon',
  'categoryImage',
  'subCategoryName',
  'subCategoryNameAr',
  'subCategoryImage',
  'subCategoryIcon',
  'productName',
  'productNameAr',
  'productDescription',
  'productDescriptionAr',
  'manufacturer',
  'manufacturerAr',
  'brandName',
  'brandNameAr',
  'brandLogo',
  'featureFlag',
  'loyalityPoints',
  'isRedeemable',
  'length',
  'breadth',
  'height',
  'quantity',
  'weight',
  'costPrice',
  'skuId',
  'barcode',
  'redemptionPoints',
  'vat',
  'margin',
  'productImage',
  'tags',
  'unitValue'
];

const ordersCsvColumn = [
  "Booking Number",
  "Customer Name",
  "Customer Phone",
  "Store Name",
  "Picker",
  "Payment Mode",
  "Total Amount",
  "Booking Time",
  "Slot Time",
  "Status",
  "Delivery date time"
];

const quotationCsvColumn = [
  "id",
  "contactName", 
  "emailAddress",
  "addressLine1",
  "addressLine2",
  "addressLine3",
  "addressLine4",
  "city",
  "region",
  "postalCode",
  "country",
  "contractorId",
  "quoteStatus",
  "contractorQuoteId",
  "milestoneId",
  "item",
  "description",
  "quantity",
  "unitPrice",
  "tax",
  "amountWithTax",
  "invoiceNumber",
  "status",
  "dueDate"
]

const productCsvHeader = {
  categoryName: 1,
  categoryNameAr: 1,
  categoryIcon: 1,
  categoryImage: 1,
  subCategoryName: 1,
  subCategoryNameAr: 1,
  subCategoryImage: 1,
  subCategoryIcon: 1,
  productName: 1,
  productNameAr: 1,
  productDescription: 1,
  productDescriptionAr: 1,
  manufacturer: 1,
  manufacturerAr: 1,
  brandName: 1,
  brandNameAr: 1,
  featureFlag: 1,
  loyalityPoints: 1,
  isRedeemable: 1,
  length: 1,
  breadth: 1,
  height: 1,
  quantity: 1,
  weight: 1,
  costPrice: 1,
  skuId: 1,
  barcode: 1,
  redemptionPoints: 1,
  vat: 1,
  productImage: 1,
  margin: 1,
  brandRank: 1,
  brandLogo: 1,
  tags : 1 ,
  unitValue : 1 
};

const deliveryModeConstants = {
  theashHoldVolume: 0.7,
  theashDimension: 45, // in cm ,
  deliveryModes: {
    BIKE: 0,
    TRUCK: 1,
  },
  deliveryModesString: {
    BIKE: "Bike",
    TRUCK: "Car",
  },
};

const ADDRESS_TYPE = {
  HOME: 1,
  WORK: 2,
  OTHER: 3,
};

const groceryBookingType = {
  ONE_TIME: 0,
  DAILY: 1,
  WEEKLY: 2,
  MONTHLY: 3,
};

const checkoutHtml = `<html>
<head>
</head>
<body>
</body>
<script src =
              "https://epayment.areeba.com/checkout/version/55/checkout.js"
            data-error="errorCallback"
            data-cancel="cancelCallback"
    data-complete="{{apiLink}}/api/customer/checkoutCodes?orderId={{orderId}}&customerId={{customerId}}&sessionId={{sessionId}}">
        </script>

    <script type="text/javascript">
        function errorCallback(error) {
          
              // console.log(JSON.stringify(error));
              window.location = "{{checkoutHost}}/customerPayment?paymentStatus=Failure"
        }
        function cancelCallback() {
          // console.log(JSON.stringify(error));
          window.location = "{{checkoutHost}}/customerPayment?paymentStatus=Failure"
        }
        Checkout.configure({
            merchant: '{{merchantId}}' ,
            order: {
                amount: '{{amount}}',
                currency: '{{currency}}',
                description: 'Ordered goods',
               id: '{{orderId}}'
                },
                session: {
                  id: '{{sessionId}}'
                },
            interaction: {
              operation: 'PURCHASE',
                merchant: {
                    name: '{{merchantName}}',
                    address: {
                        line1: '{{address1}}',
                        line2: '{{address2}}'     
                    }    
                }
            }
        });
Checkout.showLightbox();
    </script>
</html>`;

const PAYMENT_METHODS = {
  COD: 1,
  SADAD: 3,
  WALLET: 4,
  AREEBA: 5,
  CARD_ON_DELIVERY: 6,
};

const BOOKING_TYPE_STATUS = {
  PICKUP: 1,
  DELIVERY: 2,
  BOTH: 3,
  IMMEDIATELY: 4,
  ADVANCE: 5,
};




const ORDER_STATUS = {
  PARTIAL_REQUESTED: 5,
  REQUESTED: 17,
  ACCEPTED: 1,
  REJECTED: 8,
  ASSIGNED: 0,
  ON_THE_WAY: 4,
  REACHED: 18,
  COMPLETED: 2,
  CANCELLED: 9,
  CANCELLED_DUE_TO_PAYMENT: 12,
  ADMIN_CANCELLED: 13,
  DRIVER_ACCEPTED: 14,
  DRIVER_REJECTED: 15,
  DRIVER_FAILED: 16,
};

const PICKER_JOB_STATUSES = {
  REQUESTED: 0,
  ACCEPTED : 1 , 
  REJECTED: 2,
  PICKED: 3,
  JOB_NOT_ASSIGNED: -1,
};

const QUOTE_STATUS = {
  CREATED : 0,
  ACCEPTED: 1,
  REJECTED: 2,
  DISPUTED: 3,
  SENT:4,
  COMPLETED: 5
}

const MILESTONE_STATUS = {
  CREATED : 0,
  AWAITING_PAYMENT: 1,
  DONE: 2,
  DISPUTED: 3,
}

const TRANSPORT_TYPE = {
  BIKE: 0,
  TRUCK: 1,
};

const promoTypes = {
  FLAT: 1,
  PERCENTAGE: 2,
};

const pushFlags = {
  ASSIGN_PICKER: 10,
  ORDER_PICKED: 11,
  ORDER_SHIPPED: 12,
  ORDER_COMPLETED: 13,
  SLOT_EDITED: 14,
  ITEMS_OUT_OF_STOCK : 15 ,
  ORDER_CANCELLED : 16 ,
  CUSTOMER_ORDER_CANCELLED : 17 ,
  CUSTOMER_ORDER_EDITED : 18 ,
  ORDER_ACCEPTED_BY_DRIVER : 19 ,
  DIRVER_ON_THE_WAY_TO_STORRE :20 ,
  ORDER_PICKED_BY_DRIVER : 21, 
  ORDER_ON_THE_WAY : 22, 
  ORDER_COMPLETED : 23  ,
  DRIVER_ARRIVED : 24
};

const notificationMessageKeys = { 
  ASSIGN_PICKER: "ASSIGN_PICKER",
  ORDER_PICKED: "ORDER_PICKED",
  ORDER_SHIPPED: "ORDER_SHIPPED",
  ORDER_COMPLETED: "ORDER_COMPLETED",
  ORDER_EDITED: "ORDER_EDITED",
  TEST_NOTIFICATION: "TEST_NOTIFICATION",
  SLOT_EDITED: "SLOT_EDITED",
  ITEMS_OUT_OF_STOCK : "ITEMS_OUT_OF_STOCK" ,
  ORDER_CANCELLED : "ORDER_CANCELLED" ,
  CUSTOMER_ORDER_CANCELLED : "CUSTOMER_ORDER_CANCELLED" ,
  CUSTOMER_ORDER_EDITED : "CUSTOMER_ORDER_EDITED" ,
  ORDER_ACCEPTED_BY_DRIVER : "ORDER_ACCEPTED_BY_DRIVER" ,
  DIRVER_ON_THE_WAY_TO_STORRE : "DIRVER_ON_THE_WAY_TO_STORRE" ,
  ORDER_PICKED_BY_DRIVER : "ORDER_PICKED_BY_DRIVER" ,
  ORDER_ON_THE_WAY : "ORDER_ON_THE_WAY" , 
  ORDER_COMPLETED : "ORDER_COMPLETED",
  DRIVER_ARRIVED : "DRIVER_ARRIVED"

};

const bannerTypes = {
  CATEGORY: 0,
  SUBCATEGORY: 1,
  PRODUCT: 2,
};

const defaultSales = {
  yearlySales: [
    {
      year: 2014,
      sales: 0,
    },
    {
      year: 2015,
      sales: 0,
    },
    {
      year: 2016,
      sales: 0,
    },
    {
      year: 2017,
      sales: 0,
    },
    {
      year: 2018,
      sales: 0,
    },
    {
      year: 2019,
      sales: 0,
    },
    {
      year: 2020,
      sales: 0,
    },
  ],

  hourlySales: [
    {
      hour: 0,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 1,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 2,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 3,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 5,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 6,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 7,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 8,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 9,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 10,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 11,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 12,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 13,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 14,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 15,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 16,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 17,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 18,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 19,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 20,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 21,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 22,
      todaySales: 0,
      yesterDaySales: 0,
    },
    {
      hour: 23,
      todaySales: 0,
      yesterDaySales: 0,
    },
  ],
};

const sortCriterias = {
  DATE_TIME: 0,
  PRICE: 1,
};

const adminOrderSortCriterias = {
  SLOT: 0,
};

const schedulerThreshHold = {
  DAILY: 7,
  WEEKLY: 4,
  MONTHLY: 3,
};

const bookingStates = {
  UPCOMING: 0,
  ONGOING: 1,
  PAST: 2,
};

const giftsFilter = {
  ALL_GIFTS: 0,
  GIFTS_UNDER_MY_POINTS: 1,
  GIFTS_NOT_IN_RANGE: 2,
};

const refferalMessagesPerLanguage = {
  en : `For each friend that joins and places its first order, you and your friend will receive {{currency}}`+'{{refferedByPoints}} , {{currency}}{{refferedToPoints}}  respectively' ,
  ar : `لكل صديق ينضم ويقدم أول طلب له ، ستتلقى أنت وصديقك {{currency}} " {{refferedByPoints}} ، {{currency}} {{refferedToPoints}} على التوالي` 
}



const reporteTypes = {
  DAILY: 0,
  WEEKLY: 1,
  MONTHLY: 2,
};

const planSelect = {
  STARTER: 0,
  STANDARD: 1,
  PREMIUM: 2
}

const appTypes = {
  CUSTOMER : 0 ,
  PICKER : 1
};

const cancellationReasons = {
  EDIT_TIME_EXPIRED : "Edit time for the order expired"
};

const invoiceHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!--[if IE]>
<html xmlns="http://www.w3.org/1999/xhtml" class="ie">
   <![endif]--><!--[if !IE]><!-->
   <html style="margin: 0;padding: 0;" xmlns="http://www.w3.org/1999/xhtml">
      <!--<![endif]-->
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
         <title></title>
         <!--[if !mso]><!-->
         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
         <!--<![endif]-->
         <meta name="viewport" content="width=device-width" />
         <style type="text/css">
            @media only screen and (min-width: 620px){.wrapper{min-width:600px !important}.wrapper h1{}.wrapper h1{font-size:64px !important;line-height:63px !important}.wrapper h2{}.wrapper h2{font-size:30px !important;line-height:38px !important}.wrapper h3{}.wrapper h3{font-size:22px !important;line-height:31px !important}.column{}.wrapper .size-8{font-size:8px !important;line-height:14px !important}.wrapper .size-9{font-size:9px !important;line-height:16px !important}.wrapper .size-10{font-size:10px !important;line-height:18px !important}.wrapper .size-11{font-size:11px !important;line-height:19px !important}.wrapper .size-12{font-size:12px !important;line-height:19px !important}.wrapper .size-13{font-size:13px !important;line-height:21px !important}.wrapper .size-14{font-size:14px !important;line-height:21px !important}.wrapper .size-15{font-size:15px !important;line-height:23px 
            !important}.wrapper .size-16{font-size:16px !important;line-height:24px !important}.wrapper .size-17{font-size:17px !important;line-height:26px !important}.wrapper .size-18{font-size:18px !important;line-height:26px !important}.wrapper .size-20{font-size:20px !important;line-height:28px !important}.wrapper .size-22{font-size:22px !important;line-height:31px !important}.wrapper .size-24{font-size:24px !important;line-height:32px !important}.wrapper .size-26{font-size:26px !important;line-height:34px !important}.wrapper .size-28{font-size:28px !important;line-height:36px !important}.wrapper .size-30{font-size:30px !important;line-height:38px !important}.wrapper .size-32{font-size:32px !important;line-height:40px !important}.wrapper .size-34{font-size:34px !important;line-height:43px !important}.wrapper .size-36{font-size:36px !important;line-height:43px !important}.wrapper 
            .size-40{font-size:40px !important;line-height:47px !important}.wrapper .size-44{font-size:44px !important;line-height:50px !important}.wrapper .size-48{font-size:48px !important;line-height:54px !important}.wrapper .size-56{font-size:56px !important;line-height:60px !important}.wrapper .size-64{font-size:64px !important;line-height:63px !important}}
         </style>
         <meta name="x-apple-disable-message-reformatting" />
         <style type="text/css">
            body {
            margin: 0;
            padding: 0;
            }
            table {
            border-collapse: collapse;
            table-layout: fixed;
            }
            * {
            line-height: inherit;
            }
            [x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            }
            .wrapper .footer__share-button a:hover,
            .wrapper .footer__share-button a:focus {
            color: #ffffff !important;
            }
            .btn a:hover,
            .btn a:focus,
            .footer__share-button a:hover,
            .footer__share-button a:focus,
            .email-footer__links a:hover,
            .email-footer__links a:focus {
            opacity: 0.8;
            }
            .preheader,
            .header,
            .layout,
            .column {
            transition: width 0.25s ease-in-out, max-width 0.25s ease-in-out;
            }
            .preheader td {
            padding-bottom: 8px;
            }
            .layout,
            div.header {
            max-width: 400px !important;
            -fallback-width: 95% !important;
            width: calc(100% - 20px) !important;
            }
            div.preheader {
            max-width: 360px !important;
            -fallback-width: 90% !important;
            width: calc(100% - 60px) !important;
            }
            .snippet,
            .webversion {
            Float: none !important;
            }
            .stack .column {
            max-width: 400px !important;
            width: 100% !important;
            }
            .fixed-width.has-border {
            max-width: 402px !important;
            }
            .fixed-width.has-border .layout__inner {
            box-sizing: border-box;
            }
            .snippet,
            .webversion {
            width: 50% !important;
            }
            .ie .btn {
            width: 100%;
            }
            .ie .stack .column,
            .ie .stack .gutter {
            display: table-cell;
            float: none !important;
            }
            .ie div.preheader,
            .ie .email-footer {
            max-width: 560px !important;
            width: 560px !important;
            }
            .ie .snippet,
            .ie .webversion {
            width: 280px !important;
            }
            .ie div.header,
            .ie .layout {
            max-width: 600px !important;
            width: 600px !important;
            }
            .ie .two-col .column {
            max-width: 300px !important;
            width: 300px !important;
            }
            .ie .three-col .column,
            .ie .narrow {
            max-width: 200px !important;
            width: 200px !important;
            }
            .ie .wide {
            width: 400px !important;
            }
            .ie .stack.fixed-width.has-border,
            .ie .stack.has-gutter.has-border {
            max-width: 602px !important;
            width: 602px !important;
            }
            .ie .stack.two-col.has-gutter .column {
            max-width: 290px !important;
            width: 290px !important;
            }
            .ie .stack.three-col.has-gutter .column,
            .ie .stack.has-gutter .narrow {
            max-width: 188px !important;
            width: 188px !important;
            }
            .ie .stack.has-gutter .wide {
            max-width: 394px !important;
            width: 394px !important;
            }
            .ie .stack.two-col.has-gutter.has-border .column {
            max-width: 292px !important;
            width: 292px !important;
            }
            .ie .stack.three-col.has-gutter.has-border .column,
            .ie .stack.has-gutter.has-border .narrow {
            max-width: 190px !important;
            width: 190px !important;
            }
            .ie .stack.has-gutter.has-border .wide {
            max-width: 396px !important;
            width: 396px !important;
            }
            .ie .fixed-width .layout__inner {
            border-left: 0 none white !important;
            border-right: 0 none white !important;
            }
            .ie .layout__edges {
            display: none;
            }
            .mso .layout__edges {
            font-size: 0;
            }
            .layout-fixed-width,
            .mso .layout-full-width {
            background-color: #ffffff;
            }
            @media only screen and (min-width: 620px) {
            .column,
            .gutter {
            display: table-cell;
            Float: none !important;
            vertical-align: top;
            }
            div.preheader,
            .email-footer {
            max-width: 560px !important;
            width: 560px !important;
            }
            .snippet,
            .webversion {
            width: 280px !important;
            }
            div.header,
            .layout,
            .one-col .column {
            max-width: 600px !important;
            width: 600px !important;
            }
            .fixed-width.has-border,
            .fixed-width.x_has-border,
            .has-gutter.has-border,
            .has-gutter.x_has-border {
            max-width: 602px !important;
            width: 602px !important;
            }
            .two-col .column {
            max-width: 300px !important;
            width: 300px !important;
            }
            .three-col .column,
            .column.narrow,
            .column.x_narrow {
            max-width: 200px !important;
            width: 200px !important;
            }
            .column.wide,
            .column.x_wide {
            width: 400px !important;
            }
            .two-col.has-gutter .column,
            .two-col.x_has-gutter .column {
            max-width: 290px !important;
            width: 290px !important;
            }
            .three-col.has-gutter .column,
            .three-col.x_has-gutter .column,
            .has-gutter .narrow {
            max-width: 188px !important;
            width: 188px !important;
            }
            .has-gutter .wide {
            max-width: 394px !important;
            width: 394px !important;
            }
            .two-col.has-gutter.has-border .column,
            .two-col.x_has-gutter.x_has-border .column {
            max-width: 292px !important;
            width: 292px !important;
            }
            .three-col.has-gutter.has-border .column,
            .three-col.x_has-gutter.x_has-border .column,
            .has-gutter.has-border .narrow,
            .has-gutter.x_has-border .narrow {
            max-width: 190px !important;
            width: 190px !important;
            }
            .has-gutter.has-border .wide,
            .has-gutter.x_has-border .wide {
            max-width: 396px !important;
            width: 396px !important;
            }
            }
            @supports (display: flex) {
            @media only screen and (min-width: 620px) {
            .fixed-width.has-border .layout__inner {
            display: flex !important;
            }
            }
            }
            @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {
            .fblike {
            background-image: url(https://i7.createsend1.com/static/eb/master/13-the-blueprint-3/images/fblike@2x.png) !important;
            }
            .tweet {
            background-image: url(https://i8.createsend1.com/static/eb/master/13-the-blueprint-3/images/tweet@2x.png) !important;
            }
            .linkedinshare {
            background-image: url(https://i9.createsend1.com/static/eb/master/13-the-blueprint-3/images/lishare@2x.png) !important;
            }
            .forwardtoafriend {
            background-image: url(https://i10.createsend1.com/static/eb/master/13-the-blueprint-3/images/forward@2x.png) !important;
            }
            }
            @media (max-width: 321px) {
            .fixed-width.has-border .layout__inner {
            border-width: 1px 0 !important;
            }
            .layout,
            .stack .column {
            min-width: 320px !important;
            width: 320px !important;
            }
            .border {
            display: none;
            }
            .has-gutter .border {
            display: table-cell;
            }
            }
            .mso div {
            border: 0 none white !important;
            }
            .mso .w560 .divider {
            Margin-left: 260px !important;
            Margin-right: 260px !important;
            }
            .mso .w360 .divider {
            Margin-left: 160px !important;
            Margin-right: 160px !important;
            }
            .mso .w260 .divider {
            Margin-left: 110px !important;
            Margin-right: 110px !important;
            }
            .mso .w160 .divider {
            Margin-left: 60px !important;
            Margin-right: 60px !important;
            }
            .mso .w354 .divider {
            Margin-left: 157px !important;
            Margin-right: 157px !important;
            }
            .mso .w250 .divider {
            Margin-left: 105px !important;
            Margin-right: 105px !important;
            }
            .mso .w148 .divider {
            Margin-left: 54px !important;
            Margin-right: 54px !important;
            }
            .mso .size-8,
            .ie .size-8 {
            font-size: 8px !important;
            line-height: 14px !important;
            }
            .mso .size-9,
            .ie .size-9 {
            font-size: 9px !important;
            line-height: 16px !important;
            }
            .mso .size-10,
            .ie .size-10 {
            font-size: 10px !important;
            line-height: 18px !important;
            }
            .mso .size-11,
            .ie .size-11 {
            font-size: 11px !important;
            line-height: 19px !important;
            }
            .mso .size-12,
            .ie .size-12 {
            font-size: 12px !important;
            line-height: 19px !important;
            }
            .mso .size-13,
            .ie .size-13 {
            font-size: 13px !important;
            line-height: 21px !important;
            }
            .mso .size-14,
            .ie .size-14 {
            font-size: 14px !important;
            line-height: 21px !important;
            }
            .mso .size-15,
            .ie .size-15 {
            font-size: 15px !important;
            line-height: 23px !important;
            }
            .mso .size-16,
            .ie .size-16 {
            font-size: 16px !important;
            line-height: 24px !important;
            }
            .mso .size-17,
            .ie .size-17 {
            font-size: 17px !important;
            line-height: 26px !important;
            }
            .mso .size-18,
            .ie .size-18 {
            font-size: 18px !important;
            line-height: 26px !important;
            }
            .mso .size-20,
            .ie .size-20 {
            font-size: 20px !important;
            line-height: 28px !important;
            }
            .mso .size-22,
            .ie .size-22 {
            font-size: 22px !important;
            line-height: 31px !important;
            }
            .mso .size-24,
            .ie .size-24 {
            font-size: 24px !important;
            line-height: 32px !important;
            }
            .mso .size-26,
            .ie .size-26 {
            font-size: 26px !important;
            line-height: 34px !important;
            }
            .mso .size-28,
            .ie .size-28 {
            font-size: 28px !important;
            line-height: 36px !important;
            }
            .mso .size-30,
            .ie .size-30 {
            font-size: 30px !important;
            line-height: 38px !important;
            }
            .mso .size-32,
            .ie .size-32 {
            font-size: 32px !important;
            line-height: 40px !important;
            }
            .mso .size-34,
            .ie .size-34 {
            font-size: 34px !important;
            line-height: 43px !important;
            }
            .mso .size-36,
            .ie .size-36 {
            font-size: 36px !important;
            line-height: 43px !important;
            }
            .mso .size-40,
            .ie .size-40 {
            font-size: 40px !important;
            line-height: 47px !important;
            }
            .mso .size-44,
            .ie .size-44 {
            font-size: 44px !important;
            line-height: 50px !important;
            }
            .mso .size-48,
            .ie .size-48 {
            font-size: 48px !important;
            line-height: 54px !important;
            }
            .mso .size-56,
            .ie .size-56 {
            font-size: 56px !important;
            line-height: 60px !important;
            }
            .mso .size-64,
            .ie .size-64 {
            font-size: 64px !important;
            line-height: 63px !important;
            }
         </style>
         <style type="text/css">
            body{background-color:#fff}.logo a:hover,.logo a:focus{color:#859bb1 !important}.mso .layout-has-border{border-top:1px solid #ccc;border-bottom:1px solid #ccc}.mso .layout-has-bottom-border{border-bottom:1px solid #ccc}.mso .border,.ie .border{background-color:#ccc}.mso h1,.ie h1{}.mso h1,.ie h1{font-size:64px !important;line-height:63px !important}.mso h2,.ie h2{}.mso h2,.ie h2{font-size:30px !important;line-height:38px !important}.mso h3,.ie h3{}.mso h3,.ie h3{font-size:22px !important;line-height:31px !important}.mso .layout__inner,.ie .layout__inner{}.mso .footer__share-button p{}.mso .footer__share-button p{font-family:sans-serif}
         </style>
         <meta name="robots" content="noindex,nofollow" />
         <meta property="og:title" content="My First Campaign" />
      </head>
      <!--[if mso]>
      <body class="mso">
         <![endif]-->
         <!--[if !mso]><!-->
         <body class="no-padding" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;">
            <!--<![endif]-->
            <table class="wrapper" style="border-collapse: collapse;table-layout: fixed;min-width: 320px;width: 100%;background-color: #fff;" cellpadding="0" cellspacing="0" role="presentation">
               <tbody>
                  <tr>
                     <td>
                        <div role="banner">
                           <div class="preheader" style="Margin: 0 auto;max-width: 560px;min-width: 280px; width: 280px;width: calc(28000% - 167440px);">
                              <div style="border-collapse: collapse;display: table;width: 100%;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" class="preheader" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                       <td style="width: 280px" valign="top">
                                          <![endif]-->
                                          <div class="snippet" style="display: table-cell;Float: left;font-size: 12px;line-height: 19px;max-width: 280px;min-width: 140px; width: 140px;width: calc(14000% - 78120px);padding: 10px 0 5px 0;color: #adb3b9;font-family: sans-serif;">
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 280px" valign="top">
                                          <![endif]-->
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div class="header" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);" id="emb-email-header-container">
                              <!--[if (mso)|(IE)]>
                              <table align="center" class="header" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                    <td style="width: 600px">
                                       <![endif]-->
                                       <div class="logo emb-logo-margin-box" style="font-size: 26px;line-height: 32px;Margin-top: 6px;Margin-bottom: 20px;color: #c3ced9;font-family: Roboto,Tahoma,sans-serif;Margin-left: 20px;Margin-right: 20px;" align="center">
                                          <div class="logo-center" align="center" id="emb-email-header"><img style="display: block;height: auto;width: 100%;border: 0;max-width: 161px;" src="https://img.createsend1.com/resize/ei/t/06/A21/2F5/csimport/mytrolley.png?w=600" alt="" width="161" /></div>
                                       </div>
                                       <!--[if (mso)|(IE)]>
                                    </td>
                                 </tr>
                              </table>
                              <![endif]-->
                           </div>
                        </div>
                        <div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #fff;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <h3 style="Margin-top: 0;Margin-bottom: 12px;font-style: normal;font-weight: normal;color: #281557;font-size: 18px;line-height: 26px;font-family: Avenir,sans-serif;"> {{companyName}}  </h3>
                                                </div>
                                             </div>
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p style="Margin-top: 0;Margin-bottom: 0;">My trolley sal.<br />
                                                      Mirna Chalouhi highway, the bridge building, 5th Floor Beirut, LB<br />
                                                      Tel: 01 480 360<br />
                                                      MOF# 3451088<br />
                                                      CR: 1024500
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #ccc;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #ccc;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div class="divider" style="display: block;font-size: 2px;line-height: 2px;Margin-left: auto;Margin-right: auto;width: 40px;background-color: #ccc;">&nbsp;</div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #fff;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <h2 style="Margin-top: 0;Margin-bottom: 16px;font-style: normal;font-weight: normal;color: #e31212;font-size: 26px;line-height: 34px;font-family: Avenir,sans-serif;">PACKING SLIP</h2>
                                                </div>
                                             </div>
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p style="Margin-top: 0;Margin-bottom: 20px;">Order Date: {{orderDate}}</p>
                                                </div>
                                             </div>
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p style="Margin-top: 0;Margin-bottom: 0;">Order Number: {{orderNumber}}</p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout three-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #000000;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #000000;">
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #fff;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">&nbsp;</p>
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">Product</p>
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">&nbsp;</p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #fff;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">&nbsp;</p>
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">Quantity</p>
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">&nbsp;</p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #fff;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">&nbsp;</p>
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">Price</p>
                                                   <p class="size-18" style="Margin-top: 0;Margin-bottom: 0;font-size: 17px;line-height: 26px;" lang="x-size-18">&nbsp;</p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>


                           <!-- PRODUCTS STARTS  -->

                            {productsArray}

                            <!-- PRODUCTS END  -->
            
                           <div class="layout three-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #fff;">
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p style="Margin-top: 0;Margin-bottom: 0;">Delivery: {{deliveryCharges}}
                                                      {{currency}}
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #ccc;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #ccc;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div class="divider" style="display: block;font-size: 2px;line-height: 2px;Margin-left: auto;Margin-right: auto;width: 40px;background-color: #ccc;">&nbsp;</div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout three-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #fff;">
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                       <td style="width: 200px" valign="top" class="w160">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p style="Margin-top: 0;Margin-bottom: 0;">Total:
                                                      {{orderTotal}} {{currency}}
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #ccc;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #ccc;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div class="divider" style="display: block;font-size: 2px;line-height: 2px;Margin-left: auto;Margin-right: auto;width: 40px;background-color: #ccc;">&nbsp;</div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #fff;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <h2 style="Margin-top: 0;Margin-bottom: 0;font-style: normal;font-weight: normal;color: #e31212;font-size: 26px;line-height: 34px;font-family: Avenir,sans-serif;">Customer Notes</h2>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                              <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
                                 <!--[if (mso)|(IE)]>
                                 <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr class="layout-fixed-width" style="background-color: #fff;">
                                       <td style="width: 600px" class="w560">
                                          <![endif]-->
                                          <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
                                             <div style="Margin-left: 20px;Margin-right: 20px;">
                                                <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                                                   <p style="Margin-top: 0;Margin-bottom: 0;">{{customerName}}<br />
                                                      {{customerPhoneNo}} <br />
                                                      Address : {{address}} <br />
                                                      Notes : {{description}} <br />
                                                      Payment Method: {{paymentMethod}}<br />
                                                      Slot: Wednesday 3:30 PM &#8211; 5:00 PM
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                          <!--[if (mso)|(IE)]>
                                       </td>
                                    </tr>
                                 </table>
                                 <![endif]-->
                              </div>
                           </div>
                           <div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>
                           <div role="contentinfo">
                              <div class="layout email-footer stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                                 <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
                                    <!--[if (mso)|(IE)]>
                                    <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr class="layout-email-footer">
                                          <td style="width: 400px;" valign="top" class="w360">
                                             <![endif]-->
                                             <div class="column wide" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;max-width: 400px;min-width: 320px; width: 320px;width: calc(8000% - 47600px);">
                                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                                                   <div style="font-size: 12px;line-height: 19px;">
                                                   </div>
                                                   <div style="font-size: 12px;line-height: 19px;Margin-top: 18px;">
                                                   </div>
                                                   <!--[if mso]>&nbsp;<![endif]-->
                                                </div>
                                             </div>
                                             <!--[if (mso)|(IE)]>
                                          </td>
                                          <td style="width: 200px;" valign="top" class="w160">
                                             <![endif]-->
                                             <div class="column narrow" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;Float: left;max-width: 320px;min-width: 200px; width: 320px;width: calc(72200px - 12000%);">
                                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                                                </div>
                                             </div>
                                             <!--[if (mso)|(IE)]>
                                          </td>
                                       </tr>
                                    </table>
                                    <![endif]-->
                                 </div>
                              </div>
                              <div class="layout one-col email-footer" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
                                 <div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;">
                                    <!--[if (mso)|(IE)]>
                                    <table align="center" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr class="layout-email-footer">
                                          <td style="width: 600px;" class="w560">
                                             <![endif]-->
                                             <div class="column" style="text-align: left;font-size: 12px;line-height: 19px;color: #adb3b9;font-family: sans-serif;">
                                                <div style="Margin-left: 20px;Margin-right: 20px;Margin-top: 10px;Margin-bottom: 10px;">
                                                   <div style="font-size: 12px;line-height: 19px;">
                                                      <unsubscribe style="text-decoration: underline;">Unsubscribe</unsubscribe>
                                                   </div>
                                                </div>
                                             </div>
                                             <!--[if (mso)|(IE)]>
                                          </td>
                                       </tr>
                                    </table>
                                    <![endif]-->
                                 </div>
                              </div>
                           </div>
                           <div style="line-height:40px;font-size:40px;">&nbsp;</div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
      </body>
   </html>` ;


   


   const productElement = `       <div class="layout three-col fixed-width" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
<div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #fff;">
   <!--[if (mso)|(IE)]>
   <table align="center" cellpadding="0" cellspacing="0" role="presentation">
      <tr class="layout-fixed-width" style="background-color: #fff;">
         <td style="width: 200px" valign="top" class="w160">
            <![endif]-->
            <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
               <div style="Margin-left: 20px;Margin-right: 20px;">
                  <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                     <p style="Margin-top: 0;Margin-bottom: 0;">{{productName}}
                     </p>
                     <p style="Margin-top: 20px;Margin-bottom: 0;"> </p>
                  </div>
               </div>
            </div>
            <!--[if (mso)|(IE)]>
         </td>
         <td style="width: 200px" valign="top" class="w160">
            <![endif]-->
            <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
               <div style="Margin-left: 20px;Margin-right: 20px;">
                  <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                     <p style="Margin-top: 0;Margin-bottom: 0;">{{quantity}}</p>
                  </div>
               </div>
            </div>
            <!--[if (mso)|(IE)]>
         </td>
         <td style="width: 200px" valign="top" class="w160">
            <![endif]-->
            <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;display: table-cell;vertical-align: top;width: 33.3%;">
               <div style="Margin-left: 20px;Margin-right: 20px;">
                  <div style="mso-line-height-rule: exactly;mso-text-raise: 11px;vertical-align: middle;">
                     <p style="Margin-top: 0;Margin-bottom: 0;">{{price}} {{currency}} 
                     </p>
                  </div>
               </div>
            </div>
            <!--[if (mso)|(IE)]>
         </td>
      </tr>
   </table>
   <![endif]-->
</div>
</div>
<div style="mso-line-height-rule: exactly;line-height: 6px;font-size: 6px;">&nbsp;</div>
<div class="layout one-col fixed-width stack" style="Margin: 0 auto;max-width: 600px;min-width: 320px; width: 320px;width: calc(28000% - 167400px);overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;">
<div class="layout__inner" style="border-collapse: collapse;display: table;width: 100%;background-color: #ccc;">
   <!--[if (mso)|(IE)]>
   <table align="center" cellpadding="0" cellspacing="0" role="presentation">
      <tr class="layout-fixed-width" style="background-color: #ccc;">
         <td style="width: 600px" class="w560">
            <![endif]-->
            <div class="column" style="text-align: left;color: #8e959c;font-size: 14px;line-height: 21px;font-family: sans-serif;">
               <div style="Margin-left: 20px;Margin-right: 20px;">
                  <div class="divider" style="display: block;font-size: 2px;line-height: 2px;Margin-left: auto;Margin-right: auto;width: 40px;background-color: #ccc;">&nbsp;</div>
               </div>
            </div>
            <!--[if (mso)|(IE)]>
         </td>
      </tr>
   </table>
   <![endif]-->
</div>
</div>
<div style="mso-line-height-rule: exactly;line-height: 20px;font-size: 20px;">&nbsp;</div>      `; 


const paymentMethodsStrings = {
1 : 'CASH ON DELIVERY' ,
3 : 'SADAD' ,
4 : 'WALLET' ,
5 : 'AREEBA' ,
6 : 'CARD ON DELIVERY '
}


const emailTypes = {
  'INVOICE_EMAIL' : 'INVOICE_EMAIL'
};


const punchuationChecks = ['with','in','or','of','to','for'] ; 

const goodFleetJobTypes = {
  PICKUP : 0  ,
  DELIVERY :  1 ,
  PICKUP_AND_DELIVERY : 2
};

const goodFleetStatus = {
  CREATED : 0 ,
  ACCEPTED : 1 , 
  STARTED : 2 , 
  FAILED : 3 ,
  CANCELLED : 4 , 
  ENDED : 5 , 
  STOPPED : 6 ,
  ARRIVED : 7 
 };

 const pickerAppStatus =  {
   NEW : 0 ,
   ACTIVE :  1, 
   ENDED : 2
 }

 const notificationEvents = {
   PACKED : 20 , 
   PRICE_CHANGE  :   21 
 };


 const dynamicProductFields = {
  priority : {
    isRequired :  0 ,
    toBeShown : 1
  },
  image : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  skuId :  {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  name :  {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  description : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  manufacturer : {
    isRequired :  0 ,
    toBeShown : 1
  } , 
  
  featureFlag : {
    isRequired :  0 ,
    toBeShown : 1
  } , 
  loyalityPoints :  {
    isRequired :  0 ,
    toBeShown : 1
  } ,
  isRedeemable :  {
    isRequired :  0 ,
    toBeShown : 1
  },
  length :{
    isRequired :  0 ,
    toBeShown : 1
  } ,
  breadth : {
    isRequired :  0 ,
    toBeShown : 1
  } ,
  height : {
    isRequired :  0 ,
    toBeShown : 1
  } ,
  weight : {
    isRequired :  0 ,
    toBeShown : 1
  } ,
  quantity : {
    isRequired :  0 ,
    toBeShown : 0
  } , 
  costPrice : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  barcode : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  redemptionPoints : {
    isRequired :  0 ,
    toBeShown : 1
  }  ,
  vat : {
    isRequired :  0 ,
    toBeShown : 0
  } ,
  margin : {
    isRequired :  0 ,
    toBeShown : 1
  }  ,
  actualPrice : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  discountedPrice : {
    isRequired :  1 ,
    toBeShown : 1
  }  ,
  linkedProductIds : {
    isRequired :  0 ,
    toBeShown : 1
  },
  thumbnail : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  tags  : {
    isRequired :  0 ,
    toBeShown : 1
  } ,
  purchasedUnit : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  sellingUnit : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  baseValue :  {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  purchasedStock : {
    isRequired :  1 ,
    toBeShown : 1
  },
  gst : {
    isRequired :  1 ,
    toBeShown : 1
  } ,
  subCategoryIds : {
    isRequired :  1 ,
    toBeShown : 1
  },
  brandId : {
    isRequired :  0 ,
    toBeShown : 1
  }

};



const allValidUnits =  {
  TONES : 't' ,
  GRAMS : 'g' ,
  KILOGRAMS : 'kg' ,
  POUNDS : 'lb' ,
  LITRES : 'l' ,
  MILILITERES : 'ml' ,
  PIECES : 'pcs'

};

const validUnitCombinations =  {
  't'  : ['t', 'g','kg','lb'] ,
  'g' : ['g' , 't','kg','lb'] ,
  'kg' : ['kg' , 'g','t','lb'] ,
  'lb' : ['lb' , 'kg','g','t'] ,
  'l' : ['l' , 'ml'] ,
  'ml' : ['ml' ,'l'] ,
  'pcs' : ['pcs']
};

const toneBaseValues = {
  't' : 1 , 
  'g' : 1000000 , 
  'kg' : 1000 ,
  'lb' : 2204.62
};



module.exports = {
  allValidUnits ,
  validUnitCombinations  ,
  toneBaseValues ,
  refferalMessagesPerLanguage , 
    
  notificationEvents ,
  pickerAppStatus ,
  goodFleetStatus ,
  goodFleetJobTypes ,
  punchuationChecks ,
  emailTypes ,
  paymentMethodsStrings , 
  invoiceHtml ,
  cancellationReasons ,
  appTypes ,
  deviceTypesConstants ,
  adminOrderSortCriterias,
  bookingStates,
  schedulerThreshHold,
  sortCriterias,
  defaultSales,
  notificationMessageKeys,
  pushFlags,
  promoTypes,
  TRANSPORT_TYPE,
  PICKER_JOB_STATUSES,
  ORDER_STATUS,
  BOOKING_TYPE_STATUS,
  PAYMENT_METHODS,
  checkoutHtml,
  ADDRESS_TYPE,
  deliveryModeConstants,
  productCsvColumns,
  productCsvHeader,
  csvSize,
  deviceTypes,
  userTypes,
  smsNotificationsTypes,
  gatewayType,
  planTypes,
  defaultDaysMargin,
  exchangeRateTypes,
  mysqlTablesBYStep,
  soSubType,
  priceStatus,
  topDownSteps,
  yearEndInterval,
  divisionsStringMapping,
  channelsStringMapping,
  requestMethods,
  cronApis,
  settingsType,
  sheetType,
  days,
  months,
  responseCodes,
  commonResponseMessages,
  defaultLanguage,
  becryptData,
  sessionData,
  userRoles,
  s3BucketName,
  emailTemplates,
  emailTemplatesKeys,
  schedulerData,
  emailHtmlTemplates,
  protocols,
  defaultDataSetType,
  connectors,
  cronNames,
  merchandiseColumns,
  inventoryColumns,
  intervalApproaches,
  validChannels,
  division,
  intervalPrefix,
  groceryBookingType,
  SOCIAL_TYPE,
  bannerTypes,
  giftsFilter,
  reporteTypes,
  ordersCsvColumn,
  gender,
  invoiceHtml  ,
  productElement ,
  dynamicProductFields,
  quotationCsvColumn,
  planSelect,
  QUOTE_STATUS,
  MILESTONE_STATUS
};
