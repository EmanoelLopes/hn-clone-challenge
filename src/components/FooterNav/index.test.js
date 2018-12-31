import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FooterNav from '../FooterNav';

configure({ adapter: new Adapter() });

describe('<FooterNav />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FooterNav />);
    expect(wrapper).toMatchSnapshot();
  });
});

