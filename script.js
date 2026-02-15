// Loading Songs Dynamically
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['Addison Raw fame is a gun', 'Billie Elish chihiro', 'Fuji Kaze matsuri', 'Illit magnetic', 'Ive love dive'];
let songIndex = 2;

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  //cover.src = "images/addison raw fame is a gun.jpg/"
  cover.src = `images/${song}.jpg`;
}

loadSong(songs[songIndex]);

// Add Play and Pause
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.replace('fa-play', 'fa-pause');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.replace('fa-pause', 'fa-play');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  isPlaying ? pauseSong() : playSong();
});

// Add Next and Previous Functions
function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Update the Progress Bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const percent = (currentTime / duration) * 100;
  progress.style.width = `${percent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

// Click to Seek in Track
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
}

progressContainer.addEventListener('click', setProgress);

// Add Auto-Play Function on End
audio.addEventListener('ended', nextSong);

// Modification: Time
let clock = document.querySelector('.container')

function getCurrentTime(){
  let date = new Date()
  return date.toLocaleTimeString()
}

clock.innerHTML = getCurrentTime()