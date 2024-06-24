import { Container } from "./styled";
import { SectionList } from "@/src/components/SectionList";
import { useNotifications } from "./useNotifications";

interface INotifcations { };

export const NotificationsScreen = ({ }: INotifcations) => {
  const { RenderNotificationsItem, RenderSectionHeader, DATA } = useNotifications();
  const isNotifications = DATA;

  return (
    <Container>
      {/* condition */}
      {
        isNotifications && <SectionList 
          sections={DATA} 
          renderSectionHeader={RenderSectionHeader} 
          renderItem={RenderNotificationsItem} 
        />
      }

    </Container>
  );
};