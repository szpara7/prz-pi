import React from 'react';
import { shallow, render, mount } from 'enzyme';
import LoadingModal from './LoadingModal.jsx';
import Modal from 'react-modal';

Modal.setAppElement(document.createElement('div'));
describe('<LoadingModal />', () => {
    let loadingModal = mount(<LoadingModal isLoading={true}/>);

    it('się renderuje', () => {
        expect(loadingModal.exists()).toBe(true);
    })

    it('zawiera isLoading', () => {
        expect(loadingModal.props().isLoading).not.toBe(undefined);
    })

    it('działa na zmiane propsów', () => {
        expect(loadingModal.props().isLoading).toBe(true);
        loadingModal.setProps({ isLoading: false });
        expect(loadingModal.props().isLoading).toBe(false);
    })
});
