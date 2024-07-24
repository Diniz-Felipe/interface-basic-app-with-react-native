import React, { useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from "../theme/theme";
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import Routes from "../routes";
import { useRouter, useSegments } from "expo-router";

const PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

const queryClient = new QueryClient();

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export const AppProvider = () => {
  // const { isLoaded, isSignedIn } = useAuth();
  // const segments = useSegments()
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLoaded) return;

  //   const inTabsGroup = segments[0] === '(auth)';

  //   if (isSignedIn && inTabsGroup) {
  //     router.replace('(screens)/Home')

  //   } else if (!isSignedIn) {
  //     router.replace('(auth)/Login')
  //   }

  // }, [isSignedIn]);

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Routes />
        </Theme>
      </QueryClientProvider>
    </ClerkProvider>
  );
};