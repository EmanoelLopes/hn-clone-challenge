import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '../Avatar';

configure({ adapter: new Adapter() });

const props = {
  source: '',
  altText: '',
  hasBadge: true,
  children: {}
};

describe('<Avatar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Avatar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

