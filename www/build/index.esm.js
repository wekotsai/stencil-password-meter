import { A as ActiveRouter } from './active-router-83fe6b4d.js';
import './match-path-760e1797.js';
import './index-37394c13.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
