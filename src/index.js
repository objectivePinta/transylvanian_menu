import 'babel-polyfill'; //
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //it attaches our store to our react container components
import {loadAllAttractions} from './actions/placesActions';


const store = configureStore();
store.dispatch(loadAllAttractions());
//store.dispatch(loadAuthors());
render (
<Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
