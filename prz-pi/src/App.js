import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotificationBoxContainer from './containers/NotificationBoxContainer.jsx';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="h-100">
          <Header />
          <NotificationBoxContainer />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
