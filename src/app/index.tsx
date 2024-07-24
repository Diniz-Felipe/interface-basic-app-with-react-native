import { router } from "expo-router";
import styled from "styled-components/native";
import { Button } from "@/src/components/Button";
import { Text } from "@/src/components/Text";
import { useAuth } from '@/src/context/auth';

const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    padding-bottom: 16px;
    gap: 20px;
`;

const handleNext = () => router.push('(auth)/Login');

export default function Index () {
    const { data } = useAuth();

    const { title, subTitle } = {
        title: data?.name,
        subTitle: data?.password
    };

    return (
        <Container>
            <Text large>{title}</Text>
            <Text large>{subTitle}</Text>
            <Button.Root>
                <Button.Action onPress={handleNext}>
                   <Text>Entar</Text>
                   <Button.Icon color="#444" name="chevron-forward-outline" size={25} />
                </Button.Action>
            </Button.Root>
        </Container>
    );
};