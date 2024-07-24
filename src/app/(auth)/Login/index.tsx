import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Form } from '@/src/components/Form';
import { Container } from './styled';
import { Button } from '@/src/components/Button';
import { Text } from '@/src/components/Text';
import { useFormHooks } from '@/src/components/Form/useCases';
import { z } from 'zod';
import { useOAuth } from '@clerk/clerk-expo';
import { ListItem } from '@/src/components/ListItem';
import { router, useRouter } from 'expo-router';

const loginSchema = z.object({
  email: z.string().min(6, 'minimo 6 caracteres'),
  password: z.string().min(6, 'minimo 6 caracteres'),
})

const LoginScreen = () => {
  const {
    control, 
    handleSubmit, 
    errors, 
    onSubmit, 
    register 
  } = useFormHooks(loginSchema);
    const router = useRouter()
    const googleOAuth = useOAuth({ strategy: 'oauth_google' });
    const [isLoading, setIsLoading] = useState(false);
  
    const onGoogleSignIn = async () => {
      try {
        // setIsLoading(true)
  
        const oAuthFlow = await googleOAuth.startOAuthFlow();
  
        if (oAuthFlow.authSessionResult?.type === 'success') {
          if (oAuthFlow.setActive) {
            await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
          }
        } else {
          // setIsLoading(false)
        }
  
      } catch (error) {
        // setIsLoading(false)
        console.log(error)
      }
    };

    useEffect(() => {
      WebBrowser.warmUpAsync();
  
      return () => {
        WebBrowser.coolDownAsync();
      };
    }, []);

  return (
    <Container>

      <ListItem.Root action={onGoogleSignIn}>
        <ListItem.Icon name='logo-google' color='#555' size={25} />
        <Text>GooGle</Text>
      </ListItem.Root>

      <Form.Root>
        <Form.TextInput
          // {...register('email')}
          name='email'
          control={control}
          rules={{ required: 'email Requerid' }}

          errorMessage={errors.email?.message}
          placeholder='email'
        />

        <Form.TextInput 
          // {...register('password')}
          name='password' 
          control={control} 
          rules={{required: 'password Requerid'}} 

          errorMessage={errors.password?.message} 
          placeholder='password'
        />

        <Button.Action onPress={handleSubmit(onSubmit)}>
          <Text>Entrar</Text>
          <Button.Icon name="chevron-forward-outline" color='#444' size={25} />
        </Button.Action>
      </Form.Root>
    </Container>
  );
};

export default LoginScreen