import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from '../Logo';

configure({ adapter: new Adapter() });

describe('<Logo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});

