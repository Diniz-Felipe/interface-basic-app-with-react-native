import { SectionList } from "react-native";
import { Container } from "./styled";
import { useNotifications } from "./useNotifications";
import * as S from "@/src/components/SectionList/styled";
import { Suspense } from "react";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text } from "@/src/components/Text";

interface INotifications {};

const NotificationsScreen = () => {
  const { 
    RenderNotificationsItem, 
    RenderSectionHeader, 
    DATA,
    Loading 
  } = useNotifications();
  const isNotifications = DATA;

  return (
    <Container>
      <Suspense fallback={<Loading />}>

      {/* logged */}
      <SignedIn>
      {
        isNotifications && <SectionList
        sections={DATA}
        renderSectionHeader={({ section }) => RenderSectionHeader(section)}
        renderItem={({ item }) => RenderNotificationsItem(item)}
        ItemSeparatorComponent={S.ItemSeparatorComponent}
        />
      }
      </SignedIn>

      {/* not Logged in */}
      <SignedOut>
        <Text> {`faça login ou inscreva-se`}</Text>
      </SignedOut>

      </Suspense>
    </Container>
  );
};

export default NotificationsScreen