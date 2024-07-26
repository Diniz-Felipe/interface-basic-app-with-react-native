import React, { ReactNode, useMemo, useRef, useState } from "react";
import { Wrapper } from "./styled";

import BottomSheet from "@gorhom/bottom-sheet";

interface IBottomSheet {
    children: ReactNode;
    bottomSheetRef: React.RefObject<BottomSheet>;
    snapPoints: string [];
}

export const useSheetBottom = () => {
    //hooks
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['25%', '60%', '80%'], []);
    // open and close
    const handleClosePress = () => bottomSheetRef.current?.close();
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    // switch
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    // visible 
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return {
        handleOpenPress,
        handleClosePress,
        toggleSwitch,
        snapPoints,
        bottomSheetRef,
        isEnabled,
        toggleVisibility,
        isVisible
    };
}

export const SheetBottom = ({ children, bottomSheetRef, snapPoints, ...BottomSheetProps }: IBottomSheet) => {

    return (
        <BottomSheet
            index={0}
            snapPoints={snapPoints}
            ref={bottomSheetRef}
            enablePanDownToClose
            handleIndicatorStyle={{ backgroundColor: '#fff', width: 70 }}
            backgroundStyle={{ backgroundColor: '#ccc' }}
            {...BottomSheetProps}
        >
            <Wrapper>
                {children}
            </Wrapper>
        </BottomSheet>
    )
}