import { SheetRoot } from '@/src/components/Modal/SheetRoot';
import { SheetContainerHeader } from '@/src/components/Modal/SheetContainerHeader';
import { SheetContentContainer } from '@/src/components/Modal/SheetContentContainer';
import { SheetItemContent } from '@/src/components/Modal/SheetItemContent';
// import { SheetTimeLine } from '@/components/Modal/SheetTimeLine';

import { SheetText } from '@/src/components/Modal/SheetText';
import { SheetIcon } from '@/src/components/Modal/SheetIcon';
import { SheetActions } from '@/src/components/Modal/SheetActions';
import { SheetPortal } from '@/src/components/Modal/SheetPortal';
import { SheetModal } from '@/src/components/Modal/SheetModal';

export const ModalSheet = {
  Root: SheetRoot,
  ContentHeader: SheetContainerHeader,
  Container: SheetContentContainer,
  ItemContent: SheetItemContent,
  Text: SheetText,
  Icon: SheetIcon, 
  Actions: SheetActions,
  Modal: SheetModal,
  Portal: SheetPortal,
  // TimeLine: SheetTimeLine
  // Check: SheetCheck
  // etc.
};