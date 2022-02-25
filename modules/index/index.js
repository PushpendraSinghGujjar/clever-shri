const express = require('express');

const router = express.Router();

const multer = require('multer');

var path = require("path");

const indexController = require("./indexController/indexController");
const indexValidator = require("./indexValidator/indexValidator")

const name = require("./")
var Storage = multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+ Date.now()+path.extname(file.originalname));
    }
  });
  
  var upload = multer({
     storage:Storage,
     limits:{
      fileSize: 1024 * 1024 * 5
     } 
  }).single('file');


router.get(
    "/getData",
    indexValidator.getData,
    indexController.getData
)

router.post(
    "/addData",
    // indexValidator.addData,
    upload,
    indexController.addData
)

router.get(
  "/getKingdom",
  // indexValidator.getData,
  indexController.getKingdom
)

router.get(
  "/getKingdomDesc",
  // indexValidator.getData,
  indexController.getKingdomDesc
)

router.get(
  "/getRulerDesc",

  indexController.getRulerDesc
)

router.get(
  "/getCenturies",

  indexController.getCenturies
)

router.get(
  "/getKingdomsByYear",

  indexController.getKingdomsByYear
)

router.get(
  "/getMaps",

  indexController.getMaps
)

router.get(
  "/getKingdomWithRulers",

  indexController.getKingdomWithRulers
)

router.get(
  "/getLiterature",

  indexController.getLiterature
)



module.exports = router;