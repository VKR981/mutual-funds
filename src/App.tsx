import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { QueryClient, QueryClientProvider } from "react-query";
import { Details } from "./Pages/Details";
import { Profile } from "./Pages/Profile";
import { EditUserProfile } from "./Pages/EditUserProfile";
import { PrivateRoute } from "./Components/PrivateRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/details/:id">
            <Details />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/editprofile">
            <EditUserProfile />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
