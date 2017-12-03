/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Navbar from 'containers/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage';
import Templates from 'containers/Templates';
import Pages from 'containers/Pages';
import Menu from 'containers/Menu';
import HomePage from 'containers/HomePage';
import Structure from 'containers/Structure';

import Wrapper from './Wrapper';


export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route path="/templates" component={Templates} />
          <Route path="/pages" component={Pages} />
          <Route path="/menu" component={Menu} />
          <Route path="/structure" component={Structure} />
          <Route path="/" render={() => <Redirect to="/home" />} />

          <Route path="*" component={NotFoundPage} />

        </Switch>
      </Wrapper>
    );
  }
}
