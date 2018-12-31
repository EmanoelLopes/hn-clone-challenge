import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Sort from '../Sort';
import configureStore from '../../store';

const store = configureStore();

configure({ adapter: new Adapter() });

const props = {
  sortByComments: () => {},
  sortByUpvotes: () => {},
  sortByDate: () => {},
  visiblePosts: []
};

describe('<Sort />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Sort {...props} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('ACTION: SORT_BY_COMMENTS', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Sort {...props} />
      </Provider>
    );
  });

  it('ACTION: SORT_BY_UPVOTES', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Sort {...props} />
      </Provider>
    );
  });

  it('ACTION: SORT_BY_DATE', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Sort {...props} />
      </Provider>
    );
  });
});

