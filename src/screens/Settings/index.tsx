import React from 'react';
import { Container } from './styled';
import { SectionList } from '@/src/components/SectionList';
import { useSettings } from './useSettings';

export const SettingsScreen = () => {
  const { RenderNotificationsItem, 
    RenderSectionHeader, DATA 
  } = useSettings();

  return <Container>
    <SectionList 
      sections={DATA} 
      renderItem={RenderNotificationsItem} 
      renderSectionHeader={RenderSectionHeader} 
    />
  </Container>
}