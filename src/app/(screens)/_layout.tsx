import { Header } from "@/src/components/Header";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { Tabs, useRouter } from "expo-router";

export default function ScreensLayout() {
  const router = useRouter();

  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 70
      }
    }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          header: () => (
            <Header.Root>
              <Header.Name />
              <Header.IconRight color="#444" size={20}
                onPress={() => router.navigate("Settings")}
                icon="settings" />
            </Header.Root>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Notifications"
        options={{
          header: () => (
            <Header.Root>
              <Header.Name />
              <Header.IconRight color="#444" size={20} onPress={() => router.push('(screens)/Settings' as never)} icon="settings" />
            </Header.Root>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{
          header: () => (
            <Header.Root>
              <Header.Name />
            </Header.Root>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Settings"
        options={{
          header: () => (
            <Header.Root>
              <Header.Name />
              <Header.IconRight color="#444" size={20} onPress={() => router.push("(auth)/Login")} icon="log-out-outline" />
            </Header.Root>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}