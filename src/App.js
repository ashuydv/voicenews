import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import Home from "./components/Home/Home"
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
