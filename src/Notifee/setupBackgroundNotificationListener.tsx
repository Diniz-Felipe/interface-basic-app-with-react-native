import notifee, {EventType} from '@notifee/react-native'

const setupBackgroundNotificationListener = () => {
    const unsubscribe = notifee.onBackgroundEvent(async ({ type, detail }) => {
      if (type === EventType.PRESS) {
        console.log('usuario tocou', detail.notification);
      }
    });
  
    return unsubscribe;
};
export {setupBackgroundNotificationListener}