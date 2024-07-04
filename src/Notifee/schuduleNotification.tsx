import notifee, { TimestampTrigger, TriggerType } from "@notifee/react-native";
import { createChannelId } from "./createChannelId";

const schuduleNotification = async () => {
    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 1);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime()
    }

    const channelId = await createChannelId();

    await notifee.createTriggerNotification({
      title: 'notifee agendada!',
      body: 'essa é uma notifee agendada',
      android: {
        channelId
      }
    }, trigger)
};
export {schuduleNotification}