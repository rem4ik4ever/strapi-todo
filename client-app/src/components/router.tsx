import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './Todo';
import SignUp from './SignUp';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/register" component={SignUp} />
      <Route exact path="/" component={Todos} />
    </Router>
  );
};

export default AppRouter;
