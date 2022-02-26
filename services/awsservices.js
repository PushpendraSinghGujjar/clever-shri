const config = require("./../config")
let fs = require("fs")
const AWS = require('aws-sdk');



function uploadS3Image(file) {
    return new Promise((resolve, reject) => {
      let file_name = file.name.replace(
        /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi,
        ""
      );
      let timestamp = new Date().getTime().toString();
      let str = "";
      let chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let size = chars.length;
      for (var i = 0; i < 4; i++) {
        var randomnumber = Math.floor(Math.random() * size);
        str = chars[randomnumber] + str;
      }
      file_name = file_name.replace(/\s/g, "");
      file_name = str + timestamp + "-" + file_name;
      file.name = file_name;

        console.log('_____________________________')
        fs.readFile(file.path, function (err, data) {
          if (err) throw err; // Something went wrong!
          AWS.config.update({
            accessKeyId: config.config.s3Config.accessKeyId,
            secretAccessKey: config.config.s3Config.secretKey,
            region: config.config.s3Config.region
          });

          const s3bucket = new AWS.S3({ endpoint: 'cellar-c2.services.clever-cloud.com' });
  
          const params = {
            Bucket: config.config.s3Config.bucketName,
            Key: file_name,
            Body: data,
            ACL: "public-read",
            ContentType: file.type
          }; 
  
          console.log("IN_READ_FILE_PARAMS=>", params);
          s3bucket.putObject(params, function (err, data) {
            console.log("ERROR=>", err);
            if (err) {
              console.log("Got error:", err.message);
              console.log("Request:");
              console.log(this.request.httpRequest);
              console.log("Response:");
              console.log(this.httpResponse);
              return resolve(false);
            }
            console.log("data===>", data);
            console.log(file_name);
            return resolve(file_name);
          });
        });
    });
  }

  module.exports = {
    uploadS3Image
  }