import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};
