import { Text } from "@/components/Text";

interface IError {
    text?: string;
};

export const Error = ({ text }: IError) => {
    return <Text>{text}</Text>
};