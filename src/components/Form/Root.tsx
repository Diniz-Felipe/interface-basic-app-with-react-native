import { Container } from "@/src/components/Form/styled";

interface IRoot {
    children?: React.ReactNode;
};

export const Root = ({children}: IRoot) => { 
    return <Container>{children}</Container>
};