import React, { FC } from "react";
import Main from "./modules/main/main";
import Layout from "./components/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/">
            <Main></Main>
          </Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
