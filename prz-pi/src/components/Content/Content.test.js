import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';


describe('<Content />', () => {
    it('sie renderuje', () => {        
        var header = shallow(<Content />);

        expect(header.exists()).toBe(true);
    })

})