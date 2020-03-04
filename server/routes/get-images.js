const express = require('express');
const router = express.Router();
// const aws = require('aws-sdk');
//
// const s3 = new aws.S3();
//
// // View all images
// router.get('/personal/get-images', (req, res, next) => {
//   // // Traditional CAllBACK method
//   // s3.listObjects({Bucket: myBucket}, function(err, data) {
//   //   if (err) { console.log(err) }
//   //   // Retrieve all image filenames and create url array
//   //   const baseURL = `https://s3.amazonaws.com/${myBucket}/`;
//   //   let urlArr = data.Contents.map(e => baseURL + e.Key);
//   //   res.render('album', { data: urlArr});
//   // })
//
//   // USING PROMISES, call on the promise method
//   console.log('inside request')
//   s3.listObjects({ Bucket: 'andrewjfei-website'}).promise()
//     .then(data => {
//       console.log(data)
//       const baseURL = `https://andrewjfei-website.s3.amazonaws.com/`;
//       let urlArr = data.Contents.map(e => baseURL + e.Key);
//       console.log(urlArr)
//       res.send(urlArr);
//     })
//     .catch(err => console.log(err));
//
// });
//
// // View all images
// router.get('/events/get-images', (req, res, next) => {
//   // // Traditional CAllBACK method
//   // s3.listObjects({Bucket: myBucket}, function(err, data) {
//   //   if (err) { console.log(err) }
//   //   // Retrieve all image filenames and create url array
//   //   const baseURL = `https://s3.amazonaws.com/${myBucket}/`;
//   //   let urlArr = data.Contents.map(e => baseURL + e.Key);
//   //   res.render('album', { data: urlArr});
//   // })
//
//   // USING PROMISES, call on the promise method
//   console.log('inside request')
//   s3.listObjects({ Bucket: 'andrewjfei-events'}).promise()
//     .then(data => {
//       console.log(data)
//       const baseURL = `https://andrewjfei-events.s3.amazonaws.com/`;
//       let urlArr = data.Contents.map(e => baseURL + e.Key);
//       console.log(urlArr)
//       res.send(urlArr);
//     })
//     .catch(err => console.log(err));
//
// });

const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const PERSONAL_FOLDER_ID = '1-piIGkcenE03W39feKFVMFjgAlAlaVXs';
const EVENTS_FOLDER_ID = '11k4zZFIMEyFLggci0k90dLnJkmlZhJya';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */

function authorize(credentials, callback, result, folderId) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback, result, folderId);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, result, folderId);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback, result, folderId) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client, result, folderId);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function listFiles(auth, result, folderId) {
  // console.log('in listFiles')
  const drive = google.drive({version: 'v3', auth});
  await drive.files.list({
    pageSize: 100,
    fields: 'nextPageToken, files(id, name)',
    q: `'${folderId}' in parents and trashed = false`
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    result.send(files)
  });
}

module.exports.getPersonalImages = router.get('/personal/get-images', (req, res, next) => {
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles, res, PERSONAL_FOLDER_ID);
  });
});

module.exports.getEventImages = router.get('/events/get-images', (req, res, next) => {
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles, res, EVENTS_FOLDER_ID);
  });
});


