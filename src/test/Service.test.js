import Service from '../components/Service';
import { shallowWrapper} from './testHelper';



describe('Service', () => {
  const props = {
    imgSrc: 'src',
    title: 'Title',
    text: 'text here'
  }
  let wrapper = shallowWrapper(Service, props);
  test('Should Render without error', () => {
    expect(wrapper).toBeTruthy();
  });

  test('should render service image', () => {
    const serviceImage = wrapper.find('.service__image img');
    expect(serviceImage.length).toEqual(1);
    expect(serviceImage.getElement().props.src).toEqual(props.imgSrc);
  }); 

  test('should render a service description', () => {
    const serviceDesc = wrapper.find('.service__desc');
    const serviceTitle = serviceDesc.find('h5');
    const service = serviceDesc.find('p');
    expect(serviceDesc.length).toEqual(1);
    expect(serviceTitle.length).toEqual(1);
    expect(serviceTitle.text()).toEqual(props.title);
    expect(service.length).toEqual(1);
    expect(service.text()).toEqual(props.text);
  }); 
  
})
