import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadMore from '../LoadMore';

configure({ adapter: new Adapter() });

describe('<LoadMore />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<LoadMore />);
    expect(wrapper).toMatchSnapshot();
  });
});

