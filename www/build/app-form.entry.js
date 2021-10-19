import { r as registerInstance, h } from './index-42c6a915.js';

const appFormCss = ":host{display:block}form{padding:2em}label{padding:1em}";

let AppForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    if (this.match && this.match.params.name) {
      return (h("form", null, h("label", null, h("p", null, "Email"), h("input", { type: "email" })), h("label", null, h("p", null, "Password"), h("input", { type: "password" })), h("p", null, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!"), h("input", { type: "submit", value: "Submit" })));
    }
  }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
