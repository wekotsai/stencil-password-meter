import { A as ActiveRouter } from './active-router-1877815e.js';
import './match-path-760e1797.js';
import './index-d67f0123.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
