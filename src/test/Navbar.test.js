import Navbar from '../components/Navbar';
import { shallowWrapper} from './testHelper';



describe('Nav', () => {
  let wrapper = shallowWrapper(Navbar);
  test('Should Render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('Navigation', () => {
    const nav = wrapper.find('.header__nav');
    test('should render navigation', () => {
      expect(nav.length).toEqual(1);
    });

    test('should render logo', () => {
      const logo = nav.find('.header__logo_img');
      expect(logo.length).toEqual(1);
      expect(logo.getElement().props.src).toEqual('logo.png');
      expect(logo.getElement().props.src).not.toEqual('images/anylogo.png');
    })

    test('should render Sign Up button', () => {
      const signUpBtn = nav.find('#signUpBtn');
      expect(signUpBtn.length).toEqual(1);
      expect(signUpBtn.text()).toEqual('Sign Up');
      expect(signUpBtn.text()).not.toEqual('');
    });

    test('should render Login button', () => {
      const loginBtn = nav.find('#loginBtn');
      expect(loginBtn.length).toEqual(1);
      expect(loginBtn.text()).toEqual('Login');
      expect(loginBtn.text()).not.toEqual('');
    })

    test('should only render two cta buttons in the navbar', () => {
      const authBtn = nav.find('.header__auth_links .btn');
      expect(authBtn.length).toEqual(2);
      expect(authBtn.length).not.toEqual(0);
    })
  })
  
  
})
