import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App'


Enzyme.configure({ adapter: new Adapter() });


test('Should Render without error', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy();
  expect(wrapper.find('h1').length).toEqual(1);
  expect(wrapper.find('h1').text()).toEqual('E-VOTE APP')
})