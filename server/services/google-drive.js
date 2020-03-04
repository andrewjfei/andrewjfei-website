/**
 * This file handles the requests made to the Google Drive API. Also providing functions that can be used in routes
 * to help create an API for the front-end to access.
 *
 * Author: Andrew J Fei
 */

const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// Constants that are exported so that they can be used by the routes.

// Folder ID relating to the folders in which images and be uploaded/retrieved to/from.
module.exports.PERSONAL_FOLDER_ID = '1-piIGkcenE03W39feKFVMFjgAlAlaVXs';
module.exports.EVENTS_FOLDER_ID = '11k4zZFIMEyFLggci0k90dLnJkmlZhJya';

// Scope (permissions) of what can be done to the Google Drive through the API.
// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Checks the credentials of the user trying to access the Google Drive through the API.
module.exports.getImages = (response, folderId) => {
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);

    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles, response, folderId);
  });
}


// Create an OAuth2 client with the given credentials, and then execute the
// given callback function.
authorize = (credentials, callback, response, folderId) => {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback, response, folderId);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, response, folderId);
  });
}

// Get and store new token after prompting for user authorization, and then
// execute the given callback with the authorized OAuth2 client.
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

// Lists the names and IDs of up to 100 files.
listFiles = (auth, result, folderId) => {
  const drive = google.drive({version: 'v3', auth});
  drive.files.list({
    pageSize: 100,
    fields: 'nextPageToken, files(id, name)',
    q: `'${folderId}' in parents and trashed = false`
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    result.send(files)
  });
}


