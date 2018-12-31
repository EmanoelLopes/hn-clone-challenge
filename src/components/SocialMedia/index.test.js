import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialMedia from '../SocialMedia';

configure({ adapter: new Adapter() });

describe('<SocialMedia />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SocialMedia />);
    expect(wrapper).toMatchSnapshot();
  });
});

