import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Search from '../Search';
import configureStore from '../../store';

const store = configureStore();

const props = {
  filterPosts: () => {},
  visiblePosts: [],
  value: ''
};

configure({ adapter: new Adapter() });

describe('<Search />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Search {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('filter posts', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Search {...props} />
      </Provider>
    );
  });
});

