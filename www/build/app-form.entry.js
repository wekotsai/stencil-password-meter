import { r as registerInstance, h } from './index-6c3223ca.js';

const appFormCss = ":host{display:block}.form{position:relative;color:#000080;border-radius:10px;margin:0 auto;margin-top:50px;padding:20px;box-shadow:0 5px 15px rgba(0, 0, 0, 0.2);width:350px;box-sizing:border-box}.input{display:flex;width:100%;padding:0;height:30px;border:solid 1px rgba(0, 0, 0, 0.2);border-radius:5px}.text{margin-bottom:10px}.show-hide{background-color:transparent;display:flex;align-items:center;color:#000080;margin-top:5px;border:none;outline:none;font-size:14px}.show-hide:hover{color:#f0711c}d4l-icon-show-hide .icon{width:20px;height:20px;margin-right:5px}.requirements{list-style:none;padding:0}.tnc{margin-top:20px;font-size:14px}.tnc-link{color:#000080}.submit{margin-top:25px;border-radius:5px;border:none;outline:none;width:100%;padding:0 15px;font-size:18px;line-height:36px;font-weight:500;margin:25px 0 10px;color:#fff;background:linear-gradient(#0b0bce, #000080);box-shadow:0 2px 12px -3px #3f3ff5;cursor:pointer}.submit:disabled{background:#cdd3e4;box-shadow:none}";

let AppForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.list = [];
  }
  validate(event) {
    this.value = event.target.value;
    if (this.value.length < 8) {
      this.list.push('❗Must contain at least 8 characters');
    }
    else {
      this.list.splice(0);
    }
    if (this.value.search(/[a-z]/) < 0) {
      this.list.push('❗Must contain at least one lowercase letter');
    }
    else {
      this.list.splice(1);
    }
    if (this.value.search(/[A-Z]/) < 0) {
      this.list.push('❗Must contain at least one uppercase letter');
    }
    else {
      this.list.splice(2);
    }
    if (this.value.search(/[0-9]/) < 0) {
      this.list.push('❗Must contain at least one number');
    }
    else {
      this.list.splice(3);
    }
    if (this.value.search(/[$@#&!]/) < 0) {
      this.list.push('❗Must contain at least one special character');
    }
    else {
      this.list.splice(4);
    }
    if (this.value.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) >= 0 || this.value.length == 0) {
      this.list.splice(0, this.list.length);
    }
  }
  removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  handleClick() {
    this.showPassword = !this.showPassword;
  }
  checkboxHandler(event) {
    this.checkboxValue = event.target.value;
    if (this.checkboxValue === 'on') {
      this.disabled = !this.disabled;
      return false;
    }
  }
  render() {
    return (h("form", { class: "form" }, h("d4l-company-logo", null), h("label", null, h("p", { class: "text" }, "Email"), h("input", { class: "input", type: "email", required: true })), h("label", null, h("p", { class: "text" }, "Password"), h("input", { class: "input", type: this.showPassword ? "text" : "password", value: this.value, onInput: this.validate.bind(this), required: true }), h("button", { type: "button", class: "show-hide", onClick: this.handleClick.bind(this) }, h("d4l-icon-show-hide", { classes: "show-hide-icon" }), " Show password")), this.removeDuplicates(this.list).map(item => (h("ul", { class: "requirements" }, h("li", null, item)))), h("div", { class: "tnc" }, h("input", { type: "checkbox", class: "checkbox", value: this.checkboxValue, onChange: this.checkboxHandler.bind(this), required: true }), "I accept the ", h("a", { class: "tnc-link", href: "#" }, "Terms and Conditions")), h("button", { class: "submit", disabled: !this.disabled }, "Submit")));
  }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
