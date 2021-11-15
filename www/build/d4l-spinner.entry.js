import { r as registerInstance, h } from './index-6c3223ca.js';

const spinnerCss = "@keyframes startSpinnerRotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes startSpinnerFadeIn{0%{opacity:0}100%{opacity:1}}.spinner{display:block;position:relative;flex:none;width:6em;height:6em;border:6px solid var(--color-primary);border-bottom-color:transparent;border-radius:50%;animation:1.5s startSpinnerRotate linear infinite, 0.5s startSpinnerFadeIn ease-in}.spinner--button{position:absolute;left:0;right:0;margin:auto;top:0;bottom:0;width:24px;height:24px;border:2px solid #fff;border-bottom-color:transparent}";

let Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classes = '';
    this.description = 'Content is loading';
  }
  render() {
    const { classes, description } = this;
    return (h("div", { class: `spinner ${classes}`, role: "status" }, h("span", { class: "u-visually-hidden" }, description)));
  }
};
Spinner.style = spinnerCss;

export { Spinner as d4l_spinner };
