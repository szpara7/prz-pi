import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

let mockFunction = jasmine.createSpy();

describe('<Header />', () => {
    it('sie renderuje', () => {        
        var header = shallow(<Header set_expression={mockFunction}/>);

        expect(header.exists()).toBe(true);
    })

    it('działa na wprowadzenie tekstu do search', () => {
        var header = shallow(<Header set_expression={mockFunction} />)

        header.find('input').simulate('change', { target: { value: 'M' } });
        expect(mockFunction).toHaveBeenCalled();
    })
})