import React from 'react';
import { render } from 'react-dom';
import Stages from './stages/Stages';
import './styles/styleguide.css';

const App = () => (
  <div className="app-content">
    <Stages />
  </div>
);

render(<App />, document.getElementById('root'));
