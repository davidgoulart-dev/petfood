import { configureStore } from 'redux';

import rootReducer from './modules/rootReducer'

const store = configureStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

export default store;