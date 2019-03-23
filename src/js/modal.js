// modal for video
var $ = require("jquery");
window.jQuery = $;
require("@fancyapps/fancybox");
var video = document.querySelector('#video');
$('.btn-video').fancybox({
  modal: false,
  hideScrollbar: true,
  buttons: ["close"],
  video: {
    autoStart: false
  },
  onActivate: function () {
    playButton.classList.remove('is-played');
  }

});
var playButton = document.querySelector("#play-pause");
//videoplayer
window.onload = function () {
  // Video
  var video = document.querySelector("video");
  if (video) {
    video.controls = false;
    video.autoplay = false;
  }
  if (playButton) {
    // Event listener for the play/pause button
    playButton.addEventListener("click", function () {
      if (video.paused == true) {
        // Play the video
        video.play();
        playButton.classList.toggle('is-played');
      } else {
        // Pause the video
        video.pause();
      }
    });
  }
};