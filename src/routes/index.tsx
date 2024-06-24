import { TabsRoutes } from "../routes/routes.tabs";
import { NavigationContainer } from "@react-navigation/native";

export const Routes = () => {
    return <NavigationContainer>
        <TabsRoutes />
    </NavigationContainer>
};