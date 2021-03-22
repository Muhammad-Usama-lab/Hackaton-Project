import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducers/AllReducers.js';


const Store = createStore(Reducers,applyMiddleware(thunk));


export default Store;
