import Homepage from '../containers/Homepage';
import { shallowWrapper} from './testHelper';



describe('Services', () => {
  let wrapper = shallowWrapper(Homepage);
  test('Should Render without error', () => {
    expect(wrapper).toBeTruthy();
  });
});