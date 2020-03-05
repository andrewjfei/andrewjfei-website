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
module.exports.getImages = (response, folderId, folder) => {
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);

    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles, response, folderId, folder);
  });
}


// Create an OAuth2 client with the given credentials, and then execute the
// given callback function.
function authorize(credentials, callback, response, folderId, folder) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback, response, folderId, folder);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, response, folderId, folder);
  });
}

// Get and store new token after prompting for user authorization, and then
// execute the given callback with the authorized OAuth2 client.
function getAccessToken(oAuth2Client, callback, result, folderId, folder) {
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
      callback(oAuth2Client, result, folderId, folder);
    });
  });
}

// Lists the names and IDs of up to 100 files.
function listFiles(auth, result, folderId, folder) {
  const drive = google.drive({version: 'v3', auth});
  drive.files.list({
    pageSize: 100,
    fields: 'nextPageToken, files(id, name)',
    q: `'${folderId}' in parents and trashed = false`
  }, async function(err, res) {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;

    const requests = await files.map(file => {
      // file.url = `https://drive.google.com/uc?id=${file.id}`
      file.url = `https://drive.google.com/uc?export=view&id=${file.id}`
      return file;
    })

    const imgData = await Promise.all(requests);
    const jsonContent = JSON.stringify(imgData);

    fs.writeFile(`gallery-${folder}.json`, jsonContent, 'utf8', function (err) {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
      }

      console.log("JSON file has been saved.");
    });


    // const requests = files.map(async file => {
    //   return (await downloadFile(auth, file, folder));
    // })
    //
    // const imgData = await Promise.all(requests);
    // const jsonContent = JSON.stringify(imgData);
    //
    // fs.writeFile(`gallery-${folder}.json`, jsonContent, 'utf8', function (err) {
    //   if (err) {
    //     console.log("An error occured while writing JSON Object to File.");
    //     return console.log(err);
    //   }
    //
    //   console.log("JSON file has been saved.");
    // });
  });
}

// Downloads the files in the Google Drive.
async function downloadFile(auth, file, folder) {
  const drive = google.drive({version: 'v3', auth});
  const fileDest = `../src/assets/images/${folder}/${file.name}`;

  if(fs.existsSync(fileDest)) {
    console.log("The file exists.");

    return {'path': `../../assets/images/${folder}/${file.name}`};

    // return null;
  } else {
    const dest = fs.createWriteStream(fileDest);

    await drive.files.get({
      fileId: file.id,
      alt: 'media'
    }, {responseType: 'stream'}, (err, res) => {
      res.data
        .on('end', function () {
        })
        .on('error', function (err) {
          console.log('Error during download', err);
        })
        .pipe(dest)
    })

    return {'path': `../../assets/images/${folder}/${file.name}`};
  }
}

// Uploads a file with a given name from the given path to the Google Drive.
function storeFiles(auth) {
  const drive = google.drive({version: 'v3', auth});
  const fileMetadata = {
    'name': 'escalator.jpeg', // Name of file.
    parents: [EVENTS_FOLDER_ID]
  };
  const media = {
    mimeType: 'image/jpeg',
    body: fs.createReadStream('/Users/andrewjfei/Pictures/Personal/DSC02191.jpg') // Path of file.
  };
  drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  }, function (err, file) {
    if (err) {
      // Handle error
      console.error(err);
    } else {
      console.log('File Id: ', file.data.id);
    }
  });
}


