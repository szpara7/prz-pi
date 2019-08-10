import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Modal from 'react-modal';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Provider from 'react-redux';

import DoneContainer from '../../containers/DoneContainer';
import DoneContent from './DoneContent';

Modal.setAppElement(document.createElement('div'));

let mockFunction = jasmine.createSpy();
let mockStore = configureStore();
let initialState = {};
let store = mockStore(initialState);
let done = [
    { id: 1, title: "Done1", description: "Description1", likes: 2, dislikes: 3, startDate: "07.11.2018 21:15:17", endDate: "07.11.2018 21:17:50", userId: 1, modelStatus: 4 },
    { id: 1, title: "Done2", description: "Description2", likes: 4, dislikes: 6, startDate: "08.11.2018 21:15:17", endDate: "08.11.2018 21:17:50", userId: 1, modelStatus: 4 }]


 describe('<DoneContent />', () => {
    it('sie renderuje', () => {
        var mock = shallow(<DoneContent fetchDoneList={mockFunction} fetchUsers={mockFunction} isLoading={false} done={done} searchExpression={""} />);

        expect(mock.exists()).toBe(true);
    })
})