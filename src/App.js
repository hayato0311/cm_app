import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default connect(null,)(App);
