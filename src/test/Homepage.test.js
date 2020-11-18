import Homepage from '../containers/Homepage';
import { shallowWrapper} from './testHelper';



describe('Nav', () => {
  let wrapper = shallowWrapper(Homepage);
  test('Should Render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('Services Section', () => {
    const services = wrapper.find('.homepage__services');
    test('should render services section without errors', () => {
      expect(services.length).toEqual(1);
    });
  })
  
  
})
