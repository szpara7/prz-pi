import React from 'react';
import { shallow, mount } from 'enzyme';
import NotificationBox from './NotificationBox';
import { NOTIFICATION_CONSTS } from '../../actions/notificationsActions.js';

describe('<NotificationBox />', () => {
    it('sie renderuje', () => {
        var notificationBox = mount(<NotificationBox show={true} message={"MESSAGE"} type={NOTIFICATION_CONSTS.NOTIFICATION_ALERT} />);

        expect(notificationBox.exists()).toBe(true);
    })

    it('zawiera propsy', () => {
        var notificationBox = mount(<NotificationBox show={true} message={"MESSAGE"} type={NOTIFICATION_CONSTS.NOTIFICATION_ALERT} />);

        expect(notificationBox.prop('show')).not.toBe(undefined);
        expect(notificationBox.prop('type')).not.toBe(undefined);
        expect(notificationBox.prop('message')).not.toBe(undefined);
    })

    it('wyświetla odpowiedni typ', () => {
        var notificationBox = shallow(<NotificationBox show={true} message={"MESSAGE"} type={NOTIFICATION_CONSTS.NOTIFICATION_ALERT} />);

        expect(notificationBox.find('strong').text()).toBe('ALERT!!!');
        notificationBox.setProps({ type: NOTIFICATION_CONSTS.NOTIFICATION_ERROR });
        expect(notificationBox.find('strong').text()).toBe("ERROR!!!");
        notificationBox.setProps({ type: NOTIFICATION_CONSTS.NOTIFICATION_SUCCESS });
        expect(notificationBox.find('strong').text()).toBe('SUCCESS!!!');
    })

    it('wyświetla odpowiednią wiadomość', () => {
        var notificationBox = shallow(<NotificationBox show={true} message={"Message"} type={NOTIFICATION_CONSTS.NOTIFICATION_ALERT} />);

        expect(notificationBox.find('div').text().includes("Message")).toBe(true);
    })
})