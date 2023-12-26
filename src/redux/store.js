
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import taskReducer from './reducer';

const store = createStore(
  taskReducer,
  composeWithDevTools() 
);

export default store;
