require('jsdom-global/register');
require('babel-core/register')();
require('ignore-styles');
require('babel-polyfill');
require('canvas-prebuilt');

// enzyme setup
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// jsdom setup
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {document} = ( new JSDOM(
  '<!doctype html><html><body><canvas></canvas></body></html>'
)).window;

global.document = document;
global.window = document.defaultView;
global.genericImage = new Image();

window.requestAnimationFrame = (x) => {
  setTimeout(x,0);
};