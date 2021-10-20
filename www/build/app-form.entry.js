import { r as registerInstance, h, g as getElement } from './index-42c6a915.js';

const appFormCss = ":host{display:block}form{padding:2em}label{padding:1em}.validations{display:none}";

let AppForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.list = [
      'At least 8 characters',
      'At least 1 lowercase letter',
      'At least 1 uppercase letter',
      'At least 1 numerical number',
      'At least 1 special character'
    ];
  }
  // private list?: HTMLUListElement;
  handleChange(event) {
    // this.list.style.display = 'block';
  }
  render() {
    return (h("form", null, h("label", null, h("p", null, "Email"), h("input", { type: "email" })), h("label", null, h("p", null, "Password"), h("input", { class: "checkPassword", type: "password", onInput: (event) => this.handleChange(event) })), this.list.map(item => (h("ul", { class: "validations" }, h("li", null, item))))));
  }
  get modalEl() { return getElement(this); }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
