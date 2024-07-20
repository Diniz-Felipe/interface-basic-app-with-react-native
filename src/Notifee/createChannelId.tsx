import notifee, { AndroidImportance } from "@notifee/react-native";

const createChannelId = async () => {

    const channelId = await notifee.createChannel({
      id: '17',
      name: 'sales',
      vibration: true,
      importance: AndroidImportance.HIGH
    });
    return channelId
};
export {createChannelId}