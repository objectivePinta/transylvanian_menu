import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function movieReducer(state = initialState.places,action) {
  console.log(action.type);
  switch (action.type) {
    case ActionTypes.LOAD_PLACES_SUCCESS:
      return [...action.places];
    default :
      return state;
  }
}

