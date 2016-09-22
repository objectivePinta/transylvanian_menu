import * as actionTypes from './actionTypes';

export function selectAttraction(attraction) {
  return {type: actionTypes.SELECT_ATTRACTION, payload:attraction}
}

