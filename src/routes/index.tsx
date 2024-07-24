import { Stack } from "expo-router"

const Routes = () => {
  return (
    <Stack 
      screenOptions={{ headerShown: false }} 
    >
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(screens)" /> 
    </Stack>
  )
}

export default Routes;
