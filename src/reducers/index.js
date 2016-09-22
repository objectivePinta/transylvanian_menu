import {combineReducers} from 'redux';
import places from './placesReducer';
import attractions from './attractionReducer';


const rootReducer = combineReducers({
  places,attractions
});

export default rootReducer;
