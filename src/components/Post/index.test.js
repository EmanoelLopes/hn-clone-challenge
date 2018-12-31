import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Post from '../Post';

configure({ adapter: new Adapter() });

const props = {
  upvotes: 11,
  url: '',
  title: '',
  category: '',
  categoryType: '',
  author: '',
  createdAt: 1234567890,
  comments: 0,
  owner: false
};

describe('<Post />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Post {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

