import { SectionList } from "react-native";
import { Container } from "./styled";
import { useNotifications } from "./useNotifications";
import * as S from "@/src/components/SectionList/styled";
import { Suspense } from "react";

interface INotifications {};

export const NotificationsScreen = () => {
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

      {/* condition */}
      {
        isNotifications && <SectionList
        sections={DATA}
        renderSectionHeader={({ section }) => RenderSectionHeader(section)}
        renderItem={({ item }) => RenderNotificationsItem(item)}
        ItemSeparatorComponent={S.ItemSeparatorComponent}
        />
      }
      </Suspense>
    </Container>
  );
};