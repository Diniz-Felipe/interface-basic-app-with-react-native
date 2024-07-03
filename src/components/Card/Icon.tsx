import { Ionicons } from "@expo/vector-icons";

interface IIcon {
    size: number;
    name: keyof typeof Ionicons.glyphMap;
    color: string;
};

export const Icon = ({size = 24, name, color = '#555', ...iconProps }: IIcon) => {
    return <Ionicons name={name} size={size} color={color} {...iconProps} />
};