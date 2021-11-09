import { r as registerInstance, h } from './index-6c3223ca.js';
import { i as injectHistory } from './index-015ce45d.js';
import './active-router-3ece8850.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

const currentPathMatches = (pathMatcher) => {
  const matches = document.location.pathname.match(pathMatcher);
  if (matches !== null && matches.length > 0) {
    return matches.slice(1);
  }
  return undefined;
};
let StaticRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const { from, to } = this;
    const matches = currentPathMatches(from);
    if (matches !== undefined) {
      const targetURL = to(...matches);
      return h("stencil-router-redirect", { url: targetURL });
    }
    return null;
  }
};
injectHistory(StaticRedirect);

export { StaticRedirect as d4l_static_redirect };
