import { r as registerInstance, h } from './index-42c6a915.js';

const appFormCss = ":host{display:block}form{padding:2em}label{padding:1em}";

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
    this.showOptions = false;
  }
  showOptionsHandler() {
    this.showOptions = true;
  }
  render() {
    return (h("form", null, h("label", null, h("p", null, "Email"), h("input", { type: "email" })), h("label", null, h("p", null, "Password"), h("input", { class: "password", type: "password" })), this.list.map(item => (h("ul", null, h("li", null, item)))), h("button", { onClick: this.showOptionsHandler.bind(this) }, "Submit")));
  }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
