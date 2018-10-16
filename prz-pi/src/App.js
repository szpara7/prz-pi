import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer.jsx';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotificationBoxContainer from './containers/NotificationBoxContainer.jsx';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="h-100">
          <HeaderContainer />
          <NotificationBoxContainer />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
