import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function placesReducer(state = initialState.places,action) {
  switch (action.type) {
    case ActionTypes.LOAD_PLACES_SUCCESS:
      return [...action.places];
    default :
      return state;
  }
}

