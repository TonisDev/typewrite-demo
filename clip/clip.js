import { HTMLClip, loadPlugin } from "@donkeyclip/motorcortex/";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import initParamsValidationRules from "./initParamsValidationRules";


export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

//why not  scene1("#scene-1")
clip.addIncident(scene1, 0);
// starts at 5000
//clip.addIncident(scene2("#scene-2"), 5000);