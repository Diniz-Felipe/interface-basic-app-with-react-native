import React, { ReactNode } from "react";
import { View } from 'react-native';
import {  } from '@/components/Popup/styled';

interface IPopupActions {
    children: ReactNode;
};

export const PopupActions = ({ children }: IPopupActions) => {
    return <View>{children}</View>
};