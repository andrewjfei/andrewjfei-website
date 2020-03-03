const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: 'E/CsMrPAM0FSLj9/htGiIdaavn791k640ET6+jji',
  accessKeyId: 'AKIAJKYE3BSBO2AXXXKQ',
  region: 'ap-southeast-2'
});

// console.log(aws.config)

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    console.log('Valid')
    cb(null, true);
  } else {
    console.log('Invalid')
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
}

module.exports.personalUpload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3: s3,
    bucket: 'andrewjfei-website',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'hi'}); // Set metadata of uploaded files.
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString()) // Name of file.
    }
  })
});

module.exports.eventsUpload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3: s3,
    bucket: 'andrewjfei-events',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'hi'}); // Set metadata of uploaded files.
    },
    key: function (req, file, cb) {
      cb(null, 'EVENTS' + Date.now().toString()) // Name of file.
    }
  })
});
