import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers';

const loggerMiddlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  loggerMiddlewares.push(logger);
}

const compose = composeWithDevTools(applyMiddleware(thunkMiddleware, ...loggerMiddlewares));
const store = createStore(
  reducers,
  compose,
);

export default store;