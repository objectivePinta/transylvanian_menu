import * as actionTypes from './actionTypes';
import apiFetch from './apiFetch';
import URI from 'urijs';
import * as constants from '../constants/constants';
import * as placesActions from './placesActions';
export function selectAttraction(attraction) {
  return {type: actionTypes.SELECT_ATTRACTION, payload: attraction};
}

export function postNewAttraction(attraction) {

  return function (dispatch) {
    const requestUri = new URI(constants.API_ROOT).segment('/attractions').segment('/new');
    return apiFetch(dispatch, requestUri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attraction),
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(placesActions.loadAllAttractions());
      return response.json();
    }).then(response => response.id).catch(error => {
      throw error;
    });
  };

}

export function deleteAttraction(id) {
  console.log("delete id");
  return function (dispatch) {
    const requestUri = new URI(constants.API_ROOT).segment('/attractions').segment('/delete').segment(id);
    return apiFetch(dispatch, requestUri, {
      method: 'DELETE',
    }).then(response => {
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(placesActions.loadAllAttractions());
      return response.json();
    }).then(response => response.id).catch(error => {
      throw error;
    });
  }

}


