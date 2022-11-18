import Player from '@vimeo/player';

const  throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle (timeUpdatePlayer, 1000));


function  timeUpdatePlayer (event) {
localStorage.getItem('videoplayer-current-time', event.seconds);
}