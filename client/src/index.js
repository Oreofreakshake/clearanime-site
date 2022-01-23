import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SHADER } from "./shader";

async function load() {
  console.log("Loading anime");
  document.anime_data = await fetch('https://api.clearanime.freemyip.com/api/get_anime')
    .then(response => response.json());


  console.log("Loading top anime");
  document.top_anime = await fetch('https://api.clearanime.freemyip.com/api/get_anime_list/top')
    .then(response => response.json().then(array => array.slice(0, 10)));

  console.log("Loading top airing");
  document.top_airing = await fetch('https://api.clearanime.freemyip.com/api/get_anime_list/airing')
    .then(response => response.json().then(array => array.slice(0, 10)));

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

let currentMalid;
let currentEp;

document.setCurrentlyPlayingAnime = (malid) => {
  currentMalid = malid;
};

document.updateCurrentlyPlayingEpisode = (label) => {
  currentEp = label;
};

document.getCurrentlyPlayingAnime = () => {
  return currentMalid;
};

var canvas;
var gl;
var aniSS;

const videoElement = document.createElement("video");
videoElement.addEventListener("canplay", setup_anime4k); // Setup anime upscaling module only when video dimensions are known
videoElement.crossOrigin = "anonymous"; // To prevent a tainted canvas

var firstTimeInit = false;

import("hls.js")
  .then(({ default: Hls }) => {
    var hls = new Hls();
    hls.attachMedia(videoElement);

    hls.on(Hls.Events.LEVEL_LOADED, () => {
      hls.currentLevel = hls.levels.length - 1;
    });

    document.startPlaying = () => {
      if (!firstTimeInit) {
        canvas = document.getElementById("canvas");
        gl = canvas.getContext("webgl2");
        aniSS = new document.AniSS(gl);
        firstTimeInit = true;
      }
      console.log(`Start playing ${currentMalid} episode ${currentEp}`);
      let link = document
        .anime_data
        .find(element => element.mal_details.id == currentMalid)
        .variants[0]
        .episodes
        .find(ep => ep.label === currentEp)
        .link;

      hls.loadSource(link);
      videoElement.play();
    };

    document.stopPlaying = () => {
      console.log(`Stop playing`);
      videoElement.pause();
    };
  })
  .catch((e) => {
    console.error(`Failed to import hls.js: ${e}`);
  });

let anime_upscaling_loaded = false;

function setup_anime4k() {
  if (anime_upscaling_loaded) {
    return;
  } else {
    anime_upscaling_loaded = true;
  }

  // Setup anime upscaling
  aniSS.setSource(videoElement);
  aniSS.addProgram(SHADER);
  aniSS.setScale(1);

  // Start rendering from the video tag to the canvas

  function render() {
    aniSS.render();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

load();
