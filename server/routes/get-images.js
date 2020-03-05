/**
 * This file handles all the routing relating to getting images. The Google Drive service is used to retrieve the
 * images using the Google Drive API.
 *
 * Author: Andrew J Fei
 */

const fs = require('fs');
const express = require('express');
const googleDriveAPI = require('../services/google-drive');
const router = express.Router();

module.exports.getPersonalImages = router.get('/personal/get-images', (req, res, next) => {
  googleDriveAPI.getImages(res, googleDriveAPI.PERSONAL_FOLDER_ID, 'personal');
  const contents = fs.readFileSync("gallery-personal.json");
  // Define to JSON type
  res.send(contents)

});

module.exports.getEventImages = router.get('/events/get-images', (req, res, next) => {
  googleDriveAPI.getImages(res, googleDriveAPI.EVENTS_FOLDER_ID, 'events');
  const contents = fs.readFileSync("gallery-events.json");
  // Define to JSON type
  res.send(contents)
});



