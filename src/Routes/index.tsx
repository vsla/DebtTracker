import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersList from "../Pages/UsersList";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <UsersList />
        </Route>
      </Switch>
    </Router>
  );
}
