import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.requestAnimationFrame = (x) => {
  setTimeout(x,0);
};

configure({ adapter: new Adapter() });
