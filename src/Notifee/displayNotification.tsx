import notifee from '@notifee/react-native';
import { createChannelId } from './createChannelId';

const displayNotification = async () => {
    await notifee.requestPermission();

    const channelId = await createChannelId();

    await notifee.displayNotification({
        id: 'test',
        title: 'olá Felipe!',
        body: 'minha notifee',
        android: { channelId }
    })
};

export { displayNotification }