import { r as registerInstance, h } from './index-42c6a915.js';

const appFormCss = ":host{display:block}form{padding:2em}label{padding:1em}";

let AppForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.list = [];
    // removeDuplicates(list);
    this.show = false;
  }
  validate(event) {
    this.value = event.target.value;
    if (this.value.length < 8) {
      this.list.push('At least 8 characters');
    }
    if (this.value.search(/[a-z]/) < 0) {
      this.list.push('Must contain at least one lowercase letter');
    }
    if (this.value.search(/[A-Z]/) < 0) {
      this.list.push('Must contain at least one uppercase letter');
    }
    if (this.value.search(/[0-9]/) < 0) {
      this.list.push('Must contain at least one number');
    }
    if (this.value.search(/[$@#&!]/) < 0) {
      this.list.push('Must contain at least one special character');
    }
    if (this.value.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) >= 0) {
      this.list.push('pass!');
    }
  }
  removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  showHandler() {
    this.show = true;
  }
  render() {
    return (h("form", null, h("label", null, h("p", null, "Email"), h("input", { type: "email" })), h("label", null, h("p", null, "Password"), h("input", { value: this.value, onInput: (event) => this.validate(event) })), this.list.map(item => (h("ul", null, h("li", null, item)))), h("button", { onClick: this.showHandler.bind(this) }, "Submit")));
  }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
