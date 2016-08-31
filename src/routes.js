import React from 'react';
import {Route,IndexRoute} from 'react-router';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    //<IndexRoute component={HomePage} />
    //<Route path="about" component={AboutPage} />
    //<Route path="courses" component={CoursesPage} />
    //<Route path="course" component={ManageCoursePage} />
    //<Route path="course/:id" component={ManageCoursePage} />
  </Route>
);
