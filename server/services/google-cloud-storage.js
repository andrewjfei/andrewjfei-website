// /**
//  * TODO(developer): Uncomment the following line before running the sample.
//  */

const fs = require('fs')
const bucketName = 'andrewjfei-gallery-personal';

// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Creates a client
const storage = new Storage();

module.exports = async function listFiles() {
  // Lists files in the bucket
  const [files] = await storage.bucket(bucketName).getFiles();

  const requests = await files.map(file => {
    const fileName = file.name
    const url = {'url': `https://storage.cloud.google.com/andrewjfei-gallery-personal/${fileName}`};
    return url;
  });

  const imgData = await Promise.all(requests);
  const jsonContent = JSON.stringify(imgData);

  fs.writeFile(`gallery-personal.json`, jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}

