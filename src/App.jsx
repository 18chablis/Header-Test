import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Header from "./component/Header";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
