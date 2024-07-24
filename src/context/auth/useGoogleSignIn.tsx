import { useEffect, useState } from "react";
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from "@clerk/clerk-expo";

export default function useGoogleSignIn () {
    const googleOAuth = useOAuth({ strategy: 'oauth_google' });
    const [isLoading, setIsLoading] = useState(false);
  
    const onGoogleSignIn = async () => {
      try {
        setIsLoading(true)
  
        const oAuthFlow = await googleOAuth.startOAuthFlow();
  
        if (oAuthFlow.authSessionResult?.type === 'success') {
          if (oAuthFlow.setActive) {
            await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
          }
        } else {
          setIsLoading(false)
        }
  
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    useEffect(() => {
      WebBrowser.warmUpAsync();
  
      return () => {
        WebBrowser.coolDownAsync();
      };
    }, []);
    
    return {
      onGoogleSignIn,
      isLoading
    }
  };