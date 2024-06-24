import { Text } from "@/src/components/Text";

interface ILabel {
    text?: string;
};
export const Label = ({ text }: ILabel) => {
    return <Text>{text}</Text>
};
