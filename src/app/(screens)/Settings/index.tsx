import React, { Suspense } from 'react';
import { useSettings } from '@/src/app/(screens)/Settings/useSettings';
import { Container } from './styled';
import { SectionList } from '@/src/components/SectionList';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Text } from '@/src/components/Text';
import { ModalSheet } from '@/src/components/Modal';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSheetBottom } from '@/src/components/Modal/SheetBottom';

const SettingsScreen = () => {
  const { RenderSettingsItem, RenderSectionHeader, DATA } = useSettings();
  const { bottomSheetRef, snapPoints, handleOpenPress, handleClosePress } = useSheetBottom();

  return (
    <Suspense>
      <GestureHandlerRootView>
      <Container>
      {/* logged */}
        <SignedIn>
          {/* condition */}
          <> 
            <SectionList
              sections={DATA}
              renderSectionHeader={RenderSectionHeader}
              renderItem={RenderSettingsItem}
            />

            <ModalSheet.Bottom 
              bottomSheetRef={bottomSheetRef}
              snapPoints={snapPoints}
            >
              <Text>test bottom !</Text>
            </ModalSheet.Bottom>
          </>
        </SignedIn>

        {/* not logged in */}
        <SignedOut>
          <Text>faça login ou inscreva-se</Text>
        </SignedOut>
      </Container>
      </GestureHandlerRootView>
    </Suspense>
  );
};

export default SettingsScreen;