import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import babysittersReducer from './reducers/babysittersReducer';
import userReducer from './path/to/UserSliceupdate'; // Update the path accordingly


const rootReducer = combineReducers({
  babysitters: babysittersReducer,
  user: userReducer,

});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
