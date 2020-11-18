import Services from '../components/Services';
import { shallowWrapper} from './testHelper';



describe('Services', () => {
  let services = shallowWrapper(Services);

  test('should render services section without errors', () => {
    expect(services).toBeTruthy();
    expect(services.length).toEqual(1);
  });

  test('should render services section header', () => {
    const header = services.find('h3');
    expect(header.length).toEqual(1);
    expect(header.text()).toEqual('Services');
  });  

  test('should render services section sub-header', () => {
    const subHeader = services.find('h5');
    expect(subHeader.length).toEqual(1);
    expect(subHeader.text()).toEqual('What we do');
  }); 
})
