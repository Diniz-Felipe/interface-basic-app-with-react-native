import React from 'react';
import { Text } from '@/src/components/Text'
import { Container } from './styled';
import { Form } from '@/src/components/Form';
import { Button } from '@/src/components/Button';
import { useFormHooks } from '@/src/components/Form/useCases';
import { ListItem } from '@/src/components/ListItem';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    register,
    errors,
    onSubmit
  } = useFormHooks();

  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace('/');
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <Container>
      {!pendingVerification && (
        <>
          <ListItem.Root action={onSignUpPress}>
            <ListItem.Icon name='logo-google' color='#555' size={25} />
            <Text>Google</Text>
          </ListItem.Root>

          <Form.Root>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
            />
            <TextInput
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
            {/* <Form.TextInput
              // {...register('name')}
              name='name'
              control={control}
              rules={{ required: 'Login Requerid' }}
              errorMessage={errors.name?.message}
              placeholder='name'
            /> 

            <Form.TextInput
              // {...register('email')}
              name='email'

              control={control}
              rules={{ required: 'Login Requerid' }}

              errorMessage={errors.email?.message}
              placeholder='email'
            />

            <Form.TextInput
              // {...register('password')}
              name='password'

              control={control}
              rules={{ required: 'Login Requerid' }}

              errorMessage={errors.password?.message}
              placeholder='password'
            /> */}

            {/* <Button.Action onPress={handleSubmit(onSubmit)}> */}
            <Button.Action onPress={onSignUpPress}>
              <Text>Inscreva-se</Text>
              <Button.Icon name="chevron-forward-outline" color='#444' size={25} />
            </Button.Action>
          </Form.Root>
        </>
      )}

      {pendingVerification && (
        <>
          <Form.Root>
            <TextInput
              placeholder='Code...'
              value={emailAddress}
              onChangeText={(email) => setEmailAddress(email)}
            />

            <Button.Root>
              <Button.Action onPress={onPressVerify}>
                <Text>Verify Email</Text>
              </Button.Action>
            </Button.Root>
          </Form.Root>
        </>
      )}
    </Container>
  );
};
export default RegisterScreen