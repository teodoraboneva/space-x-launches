import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Launches from "../Launches/Launches";

const App = () => (
  <Router>
    <Route exact path="/">
      <Redirect to="/launches" />
    </Route>
    <Route path="/launches">
      <Launches />
    </Route>
  </Router>
);

export default App;
