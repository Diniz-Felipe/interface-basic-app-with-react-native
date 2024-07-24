import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Header } from "@/src/components/Header";

export default function AuthLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) { 
    return <Redirect href={"(screens)/Home"} />
  }

  return (
    <Stack>
      <Stack.Screen
        name="Register"
        options={{
          header: () => (
            <Header.Root>
              <Header.Name />
            </Header.Root>
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          header: () => (
            <Header.Root>
              <Header.Name />
            </Header.Root>
          )
        }}
      />
    </Stack>
  )
}