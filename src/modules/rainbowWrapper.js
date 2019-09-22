/**
 * rainbowWrapper.js : A JS wrapper for a modified binary of 'rainbow'
 * Refer - https://github.com/mihirpathak97/rainbow/tree/audius-mod
 */

const exec = require('child_process').execFileSync
const storage = require('./Store')

function embedMetadata(filePath, spotifyID) {
  exec(
    storage.get('RAINBOW_PATH'),
    [
      filePath,
      spotifyID,
      process.env.SPOTIFY_CLIENT_ID,
      process.env.SPOTIFY_CLIENT_SECRET,
    ],
    {},
    (error, stdout, stderr) => {
      if (error) {
        return
      }
    }
  )
}

module.exports = {
  embedMetadata,
}
