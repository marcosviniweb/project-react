import { createStore, applyMiddleware } from 'redux';
import thunk from 'reduz-thunk';

import rootReducer from './reducers';


const store = createStore (rootReducer, applyMiddleware(thunk));

export default store;