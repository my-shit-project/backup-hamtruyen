const fs = require('fs')
const youtubedl = require('youtube-dl')

const video = youtubedl('https://www.dailymotion.com/video/x7kybkc',
  // Optional arguments passed to youtube-dl.
  ['--format=best'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info._filename);
  console.log('size: ' + info.size);
  console.log(info);
})

// video.pipe(fs.createWriteStream('./myvideo.mp4'))

module.export = function(url, onInfo,onFinish, onError){

}