import apiFetch from './apiFetch';
import URI from 'urijs';
import * as actionTypes from './actionTypes';
import * as constants from '../constants/constants';

function loadPlacesSuccess(places) {
  console.log(places.length);
  return {type: actionTypes.LOAD_PLACES_SUCCESS, places};
}


export function loadAllAttractions() {
  return function(dispatch) {
    const requestUri =  new URI(constants.API_ROOT).segment('/attractions').segment('/all');
    return apiFetch(dispatch,requestUri, {
      method:'GET',
    }).then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(json => {
      console.log(json.attractions);
      dispatch(loadPlacesSuccess(json));
    });
  };
}
