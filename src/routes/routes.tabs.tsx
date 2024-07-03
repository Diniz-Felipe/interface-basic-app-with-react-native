import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home";
import { SettingsScreen } from "@/src/screens/Settings";
import { NotificationsScreen } from "@/src/screens/Notifications";
import { SearchScreen } from "@/src/screens/Search";
import { Header } from "@/src/components/Header";
import { useNavigation } from "expo-router";
import { LoginScreen } from "../screens/Login";
import { useUtils } from "@/src/components/utils";
import { RegisterScreen } from "../screens/Register";

const Tabs = createBottomTabNavigator();

export const TabsRoutes = () => {
    const navigation = useNavigation();
    const { navigationTo } = useUtils();

    return <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarStyle: { 
                height: 70 
            },
            tabBarShowLabel: false,
        }}>
        <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
                header: () => (
                    <Header.Root>
                        <Header.Name />
                        <Header.IconRight color="#444" size={20}
                            onPress={() => navigation.navigate("Settings" as never)}
                            icon="settings" />
                    </Header.Root>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
            }}
        />

        <Tabs.Screen
            name="Search"
            component={SearchScreen}
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
            name="Notifications"
            component={NotificationsScreen}
            options={{
                header: () => (
                    <Header.Root>
                        <Header.Name />
                        <Header.IconRight color="#444" size={20} onPress={() => navigation.navigate('Settings' as never)} icon="settings" />
                    </Header.Root>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
                header: () => (
                    <Header.Root>
                        <Header.Name />
                        <Header.IconRight color="#444" size={20} onPress={() => navigation.navigate("Login" as never)} icon="log-out-outline" />
                    </Header.Root>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="Login"
            component={LoginScreen}
            options={{
                header: () => (
                    <Header.Root>
                        <Header.Name />
                    </Header.Root>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="Register"
            component={RegisterScreen}
            options={{
                header: () => (
                    <Header.Root>
                        <Header.Name />
                    </Header.Root>
                ),
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
                ),
            }}
        />
    </Tabs.Navigator>
};