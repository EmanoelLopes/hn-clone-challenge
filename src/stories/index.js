import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { faAddressBook }  from '@fortawesome/free-solid-svg-icons'
import configureStore from '../store';
import { Button } from '@storybook/react/demo';
import App from '../containers/App';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';

const store = configureStore();

storiesOf('Components', module)
  .add('Avatar', () => 
    <Avatar 
      source="https://img0.androidappsapk.co/115/c/2/5/br.choque.cultura.sounds.com.png"
      altText="Renan"
      hasBadge={true}>
      <Badge amount="9" />
    </Avatar>
  )
  .add('Button', () => 
    <Button type="primary" icon={faAddressBook} label="Hi, I'm a Button" />
  )

storiesOf('Containers', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('App', module).add('App', () =>
  <Provider store={store}>
    <App />
  </Provider>,
);