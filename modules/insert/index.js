const express = require('express');
const router = express.Router();
const multer = require('multer');
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();
const insertController = require("../insert/insertController/insertController")
var path = require("path");

const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename(req, file, cb) {
      cb(null, `literature-${Date.now()}${path.extname(file.originalname)}`);
    },
  });

const upload = multer({ storage });


// router.post(
//     "/addBulkKingdom",
//     // indexValidator.addKingdom,
//     insertController.addBulkKingdom
// )

router.post(
  "/addKingdom",
  // indexValidator.addKingdom,
  insertController.addKingdom
)

router.post(
  "/addRuler",
  // indexValidator.addKingdom,
  insertController.addRuler
)

router.post(
    "/addLiterature",
    multipartMiddleware,
    // upload.array("file"),
    insertController.addLiterature
)

// router.post(
//   "/uploadImage",
//   multipartMiddleware,
//   // upload.array("file"),
//   insertController.uploadImage
// )



router.post(
  "/addGeofence",
  // indexValidator.addKingdom,
  insertController.addGeofence
)


module.exports = router;