import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import MainContent from '../MainContent';
import configureStore from '../../store';

const store = configureStore();

configure({ adapter: new Adapter() });

const props = {
  dispatch: () => {}, 
  getPosts: () => {},
  visiblePosts: [],
  search: ''
};

describe('<MainContent />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MainContent {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('get visible posts', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <MainContent {...props} />
      </Provider>
    );
  });
});

