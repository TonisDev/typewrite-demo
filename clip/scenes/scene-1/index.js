import { HTMLClip, loadPlugin, AudioPlayback, AudioClip, AudioEffect } from "@donkeyclip/motorcortex/";
import html from "./index.html";
import css from "./index.css";
import { fadeOut } from "../../library/fadeOut";
import { scaleBig } from "../../library/scaleBig";
import Player from "@donkeyclip/motorcortex-player";
import TypeWritingDefinition from "@donkeyclip/motorcortex-typewriting";
const TypeWriting = loadPlugin(TypeWritingDefinition);

const clip = new HTMLClip({
  html,
  css,
  selector: "#root",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
 audioSources: [
    {
      src: "./public/keyboard.mp3",
      id: "typing",
      classes: ["sounds"],
      base64: false,
    },
  ],
});


const typewrite = new TypeWriting.TypeWriting(
  {
    css: `color:#FFFF00;font-size:30px;font-weight:bold`,
    showCursor: true,
    cursorCss: "color:#FFFF00;font-size:30px;font-weight:bold;",
    blinkDelay: 2000,
    blinkhiatus: 1500,
    text: `Welcome back...`,
  },
  { selector: ".container", duration: 5000 }
);
/*
const audioClip = new AudioClip({
  audioSources: [
    {
      src: "./public/keyboard.mp3",
      id: "my-audio",
      classes: ["sounds"],
      base64: false
    }
  ]
});*/

const audioPB = new AudioPlayback({
  selector: "~#typing",
  startFrom: 0,
  duration: 3000
});



//***otan xrhsimopoiw aytes tis grammes kollaei***
//audioClip.addIncident(audioPB, 0);
clip.addIncident(AudioPlayback,1)

//den akoygetai hxos
//clip.addIncident("typing",0)
clip.addIncident(typewrite,1)
export default clip;


