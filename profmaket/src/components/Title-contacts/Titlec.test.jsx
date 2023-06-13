import renderer from 'react-test-renderer';
import Titlec from './Titlec';

describe('Titlec component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Titlec />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});