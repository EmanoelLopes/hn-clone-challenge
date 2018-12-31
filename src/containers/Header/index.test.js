import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});

