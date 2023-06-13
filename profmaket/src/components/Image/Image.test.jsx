import renderer from 'react-test-renderer';
import Image from './Image';

describe('Image', () => {
  it('should render Image component correctly', () => {
    const tree = renderer.create(<Image src="test-image.png" alt="Test Image" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});