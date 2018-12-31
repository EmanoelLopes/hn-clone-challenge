import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Badge from '../Badge';

configure({ adapter: new Adapter() });

const props = { amount: '0' };

describe('<Badge />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Badge {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

