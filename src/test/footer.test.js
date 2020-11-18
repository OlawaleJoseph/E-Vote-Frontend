import Footer from '../components/Footer';
import { shallowWrapper} from './testHelper';



describe('Footer', () => {
  const wrapper = shallowWrapper(Footer);
  const logo = wrapper.find('.footer__logo');
  const copyright = wrapper.find('.footer__copyright');

  test('Should Render without error', () => {
    expect(wrapper).toBeTruthy();
  });


  test('should render logo', () => {

    expect(logo.length).toEqual(1);
    expect(logo).not.toEqual(0);
    expect(logo).getElement().props.src).not.toBeUndefined()
  });

  test('should render the correct image as logo', () => {
    expect(logo.getElement().props.src).toEqual('logo.png');
    expect(logo.getElement().props.src).not.toEqual('not_hero_image.jpg');
  });
  
  test('should render copyright', () => {
    expect(copyright.length).toEqual(1);
    expect(copyright.length).not.toEqual(0);
  });

  test('should render h1 in hero section', () => {
    expect(copyright.text()).not.toBeUndefined();
    expect(copyright.text()).toEqual('&c; copyright, 2020');
  });
})
