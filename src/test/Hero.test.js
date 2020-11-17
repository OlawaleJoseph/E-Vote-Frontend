import HeroSection from '../components/Hero';
import { shallowWrapper} from './testHelper';



describe('Hero Section', () => {
  const wrapper = shallowWrapper(HeroSection);
  const textArea = wrapper.find('.hero__text');

  test('Should Render without error', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper).not.toBeTruthy();
  });


  test('should render hero image', () => {
    expect(wrapper.find('.hero__img').length).toEqual(1);
    expect(wrapper.find('.hero__img').length).not.toEqual(0);
    expect(wrapper.find('.hero__img').getElement().props.src).not.toBeUndefined()
  });

  test('hero image section should render the correct image', () => {
    const heroImageSection = wrapper.find('.hero__img')
    expect(heroImageSection.getElement().props.src).toEqual('images/hero_image.jpg');
    expect(heroImageSection.getElement().props.src).not.toEqual('images/not_hero_image.jpg');
  });
  
  test('should render hero text section', () => {
    expect(wrapper.find('.hero__text').length).toEqual(1);
    expect(wrapper.find('.hero__text').length).not.toEqual(0);
  });

  test('should render h1 in hero section', () => {
    const heading = textArea.find('h1');
    expect(heading.length).toEqual(1);
    expect(heading.text()).not.toBeUndefined();
    expect(heading.text()).toEqual('Voting made easy');
  });

  test('should render paragraph in hero section', () => {
    const subHeading = textArea.find('p');
    expect(subHeading.length).toEqual(1);
    expect(subHeading.text()).not.toBeUndefined();
    expect(subHeading.text()).not.toEqual('lorem 10');
  });

  test('should render sign up button in hero section', () => {
    const registerBtn = textArea.find('a.btn');
    expect(registerBtn.length).toEqual(1);
    expect(registerBtn.text()).not.toBeUndefined();
    expect(registerBtn.text()).not.toEqual('Register');
  });
})
