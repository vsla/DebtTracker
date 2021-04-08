import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UsersList from "../Pages/UsersList";
import UserDebtsList from "../Pages/UserDebtsList";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/usuarios">
          <UsersList />
        </Route>
        <Route exact path="/usuarios/:id">
          <UserDebtsList />
        </Route>

        <Redirect to="/usuarios" />
      </Switch>
    </Router>
  );
}
