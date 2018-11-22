import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserDropDownListContainer from './../../containers/UsersDropDownListContainer';
import UsersDropDownList from './UserDropDownList';

let users = [
    {id: 1, firstName: "Przemek", lastName: "Szpara", fullName: "Przemek Szpara"},
    {id:2, firstName:"Jan", lastName :"Kowalski", fullName: "Jan Kowalski"}]

describe('<UserDropDownList />',  () => {
    it('sie renderuje', () => {
        var mock = shallow(<UsersDropDownList users={users} />);

        expect(mock.exists()).toBe(true);
    })

    it('zawiera podaną liczbę users', () => {
        var mock = shallow(<UsersDropDownList users={users} />);

        expect(mock.find('option').length).toBe(3);
    })

    it('ustawia domyślnego usera', () => {
        var mock = shallow(<UsersDropDownList users={users} userId={1}/>);

        expect(mock.find('select').first().prop('value')).toBe(1);
    })
   
})