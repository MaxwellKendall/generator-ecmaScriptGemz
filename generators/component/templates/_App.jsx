import React from 'react';
import { Route } from 'react-router-dom';
import <%= name %>Container from '../containers/<%= name %>Container';


const App = () => (
  <div className="main">
    <div>App.jsx with Container</div>
    <Route exact path='<%= name %>' component={<%= name %>Container} />

  </div>
);

export default App;
