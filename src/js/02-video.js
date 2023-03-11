import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayTimeUpdate, 1000));

function onPlayTimeUpdate(data) {
  const value = data.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(value));
}

const seconds = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.off('timeupdate', throttle(onPlayTimeUpdate, 1000));
