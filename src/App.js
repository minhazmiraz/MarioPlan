import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import Dashboard from "./component/dashboard/Dashboard";
import NavBar from "./component/layout/NavBar";
import ProjectDetails from "./component/project/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:project_id" component={ProjectDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
