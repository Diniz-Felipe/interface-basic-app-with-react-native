import { useNavigation } from "@react-navigation/native";
export const useUtils = () => {
    const navigation = useNavigation();
    
    const navigationTo = (screen: string) => {
        navigation.navigate(screen as never)
    }
    return {navigationTo}
}