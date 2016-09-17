import * as actionTypes from './actionTypes';
import PlacesApi from '../api/mockPlaces';

 function loadPlacesSuccess(places) {
  console.log(places.length);
  return {type:actionTypes.LOAD_PLACES_SUCCESS,places};
}

export function loadPlaces() {
  return function (dispatch) {
    return PlacesApi.getAllPlaces().then((places) => {
      dispatch(loadPlacesSuccess(places));
    }).catch(error=> {
      throw(error);
    });
  }
}


