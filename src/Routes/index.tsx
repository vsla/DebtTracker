import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UsersList from "../Pages/UsersList";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/usuarios">
          <UsersList />
        </Route>
        <Route path="/usuarios/:id">
          <UsersList />
        </Route>

        <Redirect to="/usuarios" />
      </Switch>
    </Router>
  );
}
