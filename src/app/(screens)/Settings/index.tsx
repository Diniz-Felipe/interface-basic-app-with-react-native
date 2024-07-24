import React, { Suspense } from 'react';
import { useSettings } from '@/src/app/(screens)/Settings/useSettings';
import { Container } from './styled';
import { SectionList } from '@/src/components/SectionList';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Text } from '@/src/components/Text';

const SettingsScreen = () => {
  const {
    RenderSettingsItem,
    RenderSectionHeader,
    DATA
  } = useSettings();

  return (
    <Suspense>
      <Container>
      {/* logged */}
        <SignedIn>
          {/* condition */}
          {
            <SectionList
              sections={DATA}
              renderSectionHeader={RenderSectionHeader}
              renderItem={RenderSettingsItem}
            />
          }
        </SignedIn>

        {/* not logged in */}
        <SignedOut>
          <Text>faça login ou inscreva-se</Text>
        </SignedOut>
      </Container>
    </Suspense>
  );
};

export default SettingsScreen;