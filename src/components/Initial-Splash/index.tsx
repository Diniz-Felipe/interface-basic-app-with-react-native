import React, { useState } from 'react';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { StyleSheet } from 'react-native';
import { hideAsync } from 'expo-splash-screen';

const VIDEOSPLASH = "../../../assets/logo.mp4";

export type InitialSplashProps = {
  onComplete: (status: boolean) => void;
};

const InitialSplashScreen = ({ onComplete }: InitialSplashProps) => {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    //console.log(status);

    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }

      if (status.didJustFinish) {
        onComplete(true);
      }
    }
    setStatus(() => status)
  };

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      isLooping={false} 
      shouldPlay={true}
      source={require(VIDEOSPLASH)} //(VIDEOSPLASH)}
    />
  );
};
export default InitialSplashScreen