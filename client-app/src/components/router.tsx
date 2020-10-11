import ProfileLoader from "components/ProfileLoader";
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Todos = React.lazy(() => import("./Todo"));
const SignUp = React.lazy(() => import("components/SignUp"));
const Login = React.lazy(() => import("components/Login"));

const AppRouter = () => {
  return (
    <React.Suspense fallback="Loading">
      <Router>
        <ProfileLoader />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Todos} />
      </Router>
    </React.Suspense>
  );
};

export default AppRouter;
