import { cancelNotification } from "./cancelNotification"
import { createChannelId } from "./createChannelId"
import { displayNotification } from "./displayNotification"
import { listSchuduleNotification } from "./listSchuduleNotification"
import { schuduleNotification } from "./schuduleNotification"
import { updateNotification } from "./updateNotification"

const useNotifee = () => {
    return {
        createChannelId,
        displayNotification,
        updateNotification,
        listSchuduleNotification,
        schuduleNotification,
        cancelNotification
    };
};

export {useNotifee}