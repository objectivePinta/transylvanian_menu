import * as ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function attractionReducer(state = initialState.attractions,action) {
  console.log(action.type);
  switch (action.type) {
    case ActionTypes.SELECT_ATTRACTION:
      console.log(state);
      if (state.includes(action.payload)) {
        return state.filter(attraction => attraction != action.payload );
      } else {
        return [...state, action.payload];
      }
    default :
      return state;
  }
}

