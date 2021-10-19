import { r as registerInstance, h, e as Host } from './index-37394c13.js';

const appFormCss = ":host{display:block}";

let AppForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
AppForm.style = appFormCss;

export { AppForm as app_form };
