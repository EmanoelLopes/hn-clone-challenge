import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostFallback from '../PostFallback';

configure({ adapter: new Adapter() });

describe('<PostFallback />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PostFallback />);
    expect(wrapper).toMatchSnapshot();
  });
});

