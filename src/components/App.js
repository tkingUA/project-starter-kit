/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';
import NavBar from './NavBar';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
