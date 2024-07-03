import React from 'react';
import { useSettings } from '@/src/screens/Settings/useSettings';
import { Container } from './styled';
import { SectionList } from '@/src/components/SectionList';

export const SettingsScreen = () => {
  const { 
    RenderSettingsItem, 
    RenderSectionHeader, 
    DATA 
  } = useSettings();

  return (
    <Container>
      {/* condition */}
      {
        <SectionList
          sections={DATA}
          renderSectionHeader={RenderSectionHeader}
          renderItem={RenderSettingsItem}
        />
      }
    </Container>
  );
};