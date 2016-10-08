import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function attractionReducer(state = initialState.attractions,action) {
  switch (action.type) {
    case ActionTypes.SELECT_ATTRACTION:
      if (state.includes(action.payload)) {
        return state.filter(attraction => attraction != action.payload );
      } else {
        return [action.payload,...state];
      }
    default :
      return state;
  }
}

