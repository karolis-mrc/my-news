import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
        <Switch>
            <Route
                exact
                path={ `${ process.env.PUBLIC_URL + "/" }` }
                component={ Home }
            />
            {/* <Route exact component={ page404 } /> */}
        </Switch>
    </Router>
  );
}

export default App;
