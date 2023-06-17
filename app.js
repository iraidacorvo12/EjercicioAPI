document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const videoPlayer = document.getElementById('videoPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const volumeUpButton = document.getElementById('volumeUpButton');
    const volumeDownButton = document.getElementById('volumeDownButton');
    const loadingMessage = document.getElementById('loadingMessage');
  
    fileInput.addEventListener('change', handleFileInputChange);
    playButton.addEventListener('click', playVideo);
    pauseButton.addEventListener('click', pauseVideo);
    volumeUpButton.addEventListener('click', increaseVolume);
    volumeDownButton.addEventListener('click', decreaseVolume);
  
    function handleFileInputChange(event) {
      const file = event.target.files[0];
      const allowedExtensions = /(\.mp4)$/i; // Expresión regular para permitir solo extensiones .mp4
  
      if (!allowedExtensions.exec(file.name)) {
        alert('Error: Solo se permiten archivos de video en formato MP4.');
        return;
      }
  
      const videoURL = URL.createObjectURL(file);
      videoPlayer.src = videoURL;
      videoPlayer.addEventListener('loadedmetadata', handleVideoLoaded);
      loadingMessage.style.display = 'block';
    }
  
    function handleVideoLoaded() {
      videoPlayer.removeEventListener('loadedmetadata', handleVideoLoaded);
      URL.revokeObjectURL(videoPlayer.src);
      videoPlayer.play();
      loadingMessage.style.display = 'none';
    }
  
    function playVideo() {
      videoPlayer.play();
    }
  
    function pauseVideo() {
      videoPlayer.pause();
    }
  
    function increaseVolume() {
      if (videoPlayer.volume < 1) {
        videoPlayer.volume += 0.1;
      }
    }
  
    function decreaseVolume() {
      if (videoPlayer.volume > 0) {
        videoPlayer.volume -= 0.1;
      }
    }
  });