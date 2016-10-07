import * as actionTypes from './actionTypes';
import apiFetch from './apiFetch';
import URI from 'urijs';
import * as constants from '../constants/constants';

export function selectAttraction(attraction) {
  return {type: actionTypes.SELECT_ATTRACTION, payload:attraction}
}

export function postNewAttraction(attraction) {

  return function(dispatch) {
    const requestUri = new URI(constants.API_ROOT).segment('/attractions').segment('/new');
    return apiFetch(dispatch,requestUri, {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestObj),
    }).then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(response => response.id).catch(error => {
      throw error;
    });
  }

}


