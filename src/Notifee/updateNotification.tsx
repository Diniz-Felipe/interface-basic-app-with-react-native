import notifee from '@notifee/react-native';
import { createChannelId } from './createChannelId';

const updateNotification = async () => {
    await notifee.requestPermission();

    const channelId = await createChannelId();

    await notifee.displayNotification({
      id: '17',
      title: 'olá <strong>Felipe</strong>!',
      body: 'minha notifee segunda atualizei',
      android: { channelId }
    });
};

export {updateNotification}