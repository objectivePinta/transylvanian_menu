import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import TourPage from './components/tour/TourPage';
import NewAttraction from './components/form/NewAttraction';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="makeyourowntour" component={TourPage} />
    <Route path="admin" component={NewAttraction} />
  </Route>

);
