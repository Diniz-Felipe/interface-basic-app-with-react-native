import { Modal } from "react-native-paper"
import { ReactNode, useState } from 'react';

interface ModalProps {
    children: ReactNode
}

const useModal = () => {
    const [visible, setVisible] = useState(false)
    const hideModal = () => setVisible(false)
    const showModal = () => setVisible(true)
    return {hideModal, showModal, visible}
};

const SheetModal = ({children}: ModalProps) => {
    const {visible, hideModal} = useModal()
    const containerStyle = { backgroundColor: 'white', padding: 20 }
    return (
        <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
        >
            {children}
        </Modal>
    );
};

export { SheetModal, useModal };