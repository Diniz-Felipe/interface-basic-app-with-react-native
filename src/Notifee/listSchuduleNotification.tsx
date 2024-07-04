import notifee from '@notifee/react-native';

const listSchuduleNotification = () => {
    notifee.getTriggerNotificationIds().then(ids => console.log(ids))
};

export {listSchuduleNotification}