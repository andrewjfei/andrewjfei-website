/**
 * This file handles all the routing relating to getting images. The Google Drive service is used to retrieve the
 * images using the Google Drive API.
 *
 * Author: Andrew J Fei
 */

const express = require('express');
const googleDriveAPI = require('../services/google-drive');
const router = express.Router();

module.exports.getPersonalImages = router.get('/personal/get-images', (req, res, next) => {

  // Calls function in /services/google-drive.js that puts json data of the images in the specified folder to the API.
  googleDriveAPI.getImages(res, googleDriveAPI.PERSONAL_FOLDER_ID);
});

module.exports.getEventImages = router.get('/events/get-images', (req, res, next) => {

  // Calls function in /services/google-drive.js that puts json data of the images in the specified folder to the API.
  googleDriveAPI.getImages(res, googleDriveAPI.EVENTS_FOLDER_ID)
});


