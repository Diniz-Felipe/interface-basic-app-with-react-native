import React from 'react';
import { Form } from '@/src/components/Form';
import { Container } from './styled';
import { Button } from '@/src/components/Button';
import { Text } from '@/src/components/Text';
import { useFormHooks } from '@/src/components/Form/useCases';

export const LoginScreen = () => {
  const {
    control, 
    handleSubmit, 
    errors, 
    onSubmit, 
    defaultValues, 
    register} = useFormHooks();

  return (
    <Container>
      <Form.Root>
        <Form.TextInput
          {...register('email')}
          name='email'
          control={control}
          rules={{ required: 'email Requerid' }}

          errorMessage={errors.email?.message}
          placeholder='email'
        />

        <Form.TextInput 
          {...register('password')}
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
