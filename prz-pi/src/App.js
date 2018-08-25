import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Content />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
