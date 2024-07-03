import { TabsRoutes } from "../routes/routes.tabs";
import {AuthProvider} from '@/src/context/auth'

export const AppProvider = () => {
    return (
        <AuthProvider>
            <TabsRoutes />
        </AuthProvider>
    );
};