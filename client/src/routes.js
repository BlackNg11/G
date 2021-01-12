import React from 'react';
import Home from './component/Home';
import Layout from './hoc/layout'
import { Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  )
}

export default Routes;