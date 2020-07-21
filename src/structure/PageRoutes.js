import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, ReferencePage } from '../pages';

/**
 * Renders pages based upon the current route.
 */
const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/content/reference/:pageKey">
        <ReferencePage />
      </Route>
    </Switch>
  );
};

export default PageRoutes;
