import { r as registerInstance, h } from './index-42c6a915.js';

const appFormCss = ":host{display:block}form{color:#515a6e;border-radius:10px;margin:40px;padding:25px 20px 10px;box-shadow:0 5px 15px rgba(0, 0, 0, 0.2);width:320px;box-sizing:border-box}.input{display:flex;width:100%;padding:0;height:30px;border:solid 1px rgba(0, 0, 0, 0.2);border-radius:5px}.requirements{list-style:none;padding:0}.submit{margin-top:25px;border-radius:5px;border:none;outline:none;width:100%;padding:0 15px;font-size:18px;line-height:36px;font-weight:500;margin:25px 0 10px;color:#fff;background:linear-gradient(#10bbad, #0faa9d);box-shadow:0 2px 12px -3px #17dfce}";

let AppForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.list = [];
    this.show = false;
  }
  validate(event) {
    this.value = event.target.value;
    if (this.value.length < 8) {
      this.list.push('❗Must contain at least 8 characters');
    }
    if (this.value.search(/[a-z]/) < 0) {
      this.list.push('❗Must contain at least one lowercase letter');
    }
    if (this.value.search(/[A-Z]/) < 0) {
      this.list.push('❗Must contain at least one uppercase letter');
    }
    if (this.value.search(/[0-9]/) < 0) {
      this.list.push('❗Must contain at least one number');
    }
    if (this.value.search(/[$@#&!]/) < 0) {
      this.list.push('❗Must contain at least one special character');
    }
    if (this.value.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) >= 0) {
      this.list.splice(0, this.list.length);
    }
  }
  removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  showHandler() {
    this.show = true;
  }
  render() {
    return (h("form", null, h("label", { class: "label" }, h("p", null, "Email"), h("input", { class: "input", type: "email" })), h("label", { class: "label" }, h("p", null, "Password"), h("input", { class: "input", value: this.value, onInput: (event) => this.validate(event) })), this.removeDuplicates(this.list).map(item => (h("ul", { class: "requirements" }, h("li", null, item)))), h("button", { class: "submit", onClick: this.showHandler.bind(this) }, "Submit")));
  }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
