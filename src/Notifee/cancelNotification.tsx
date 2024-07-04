import notifee from '@notifee/react-native';

const cancelNotification = async () => {
    await notifee.cancelNotification('17');
};

export {cancelNotification}