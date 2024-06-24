// import RootLayout from "./_layout";
import { AuthProvider } from "@/src/context";
import { TabsRoutes } from "@/src/routes/routes.tabs";

export default function Index() {
  return (
    <TabsRoutes />
  );
}