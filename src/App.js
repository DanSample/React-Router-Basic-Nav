import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Route path="/" component={Home} exact={true} />
    <Route path="/about" component={About} exact={true} />
    <Route path="/contact" component={Contact} exact={true} />
    <Navigation />
  </div>
);

export default App;
