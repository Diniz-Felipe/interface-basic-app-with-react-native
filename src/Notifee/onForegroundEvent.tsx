import notifee,{EventType} from '@notifee/react-native';

const onForegroundEvent = notifee.onForegroundEvent(({ type, detail }) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log('descarte da notificação!')
        break

      case EventType.ACTION_PRESS:
        console.log('tocou na notifee...', detail.notification)
        break
    }
})

export {onForegroundEvent}