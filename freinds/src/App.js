import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import PrivatePage from "./components/PrivatePage";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={LoginForm} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <PrivateRoute path="/private" component={PrivatePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
