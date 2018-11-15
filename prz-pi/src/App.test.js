import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Footer from './components/Footer/Footer';


describe('<App />', () => {

  let app = shallow(<App />);
  

  it('sie renderuje', () => {
    expect(app.exists()).toBe(true);
  })

  it('zawiera 1 div', () => {
    expect(app.find('div').length).toEqual(1);
  })

  it('zawiera Footer', () => {
    expect(app.children().contains(<Footer />)).toBe(true);
  })
});

