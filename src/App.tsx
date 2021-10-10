import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { Details } from "./Pages/Details";
import { Profile } from "./Pages/Profile";
import { EditUserProfile } from "./Pages/EditUserProfile";

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
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/editprofile">
            <EditUserProfile />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
