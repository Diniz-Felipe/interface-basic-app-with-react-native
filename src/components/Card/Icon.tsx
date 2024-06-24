import { Ionicons } from "@expo/vector-icons";

interface IIcon {
    size: number;
    name: any;
    color: string;
};

export const Icon = ({size, name, color, ...iconProps }: IIcon) => {
    return <Ionicons name={name} size={size} color={color} {...iconProps} />
};