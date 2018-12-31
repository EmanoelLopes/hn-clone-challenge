import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

configure({ adapter: new Adapter() });

const props = {
  icon: {}, 
  label: 'Ok',
  type: 'primary'
};

describe('<Button />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test click event', () => {
    const mockCallBack = jest.fn();

    const wrapper = shallow((<Button {...props} click={mockCallBack}>Ok!</Button>));
    wrapper.find('.button').first().simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});

