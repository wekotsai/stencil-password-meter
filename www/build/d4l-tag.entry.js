import { r as registerInstance, h, e as Host } from './index-6c3223ca.js';

const tagCss = ".tag.sc-d4l-tag{box-sizing:border-box;border:none;border-radius:4px;padding:5px 10px;margin:0;background:var(--color-neutral-transparent);height:28px;font-size:12px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:12px;letter-spacing:normal;text-align:center;color:var(--color-neutral);text-decoration:none;display:block;white-space:nowrap;transition:background 0.15s ease;cursor:pointer;outline:none}.tag.tag--active.sc-d4l-tag,.tag.sc-d4l-tag:not(:disabled):focus,.tag.sc-d4l-tag:not(:disabled):hover{color:var(--color-primary);background-color:var(--color-primary-extra-lightest)}.tag.sc-d4l-tag:disabled{cursor:not-allowed}";

let Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** The text that is displayed */
    this.text = '';
    /** A string containing additional classes that should be added to the component */
    this.classes = '';
    /** Flag indicating if the tag is disabled or not  */
    this.disabled = false;
  }
  render() {
    const { text, classes, disabled, handleClick } = this;
    return (h(Host, null, h("button", { class: `tag ${classes}`, disabled: disabled, onClick: handleClick }, text)));
  }
};
Tag.style = tagCss;

export { Tag as d4l_tag };
