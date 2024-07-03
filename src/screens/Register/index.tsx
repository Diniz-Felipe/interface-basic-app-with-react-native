import React from 'react';
import { Text } from '@/src/components/Text'
import { Container } from './styled';
import { Form } from '@/src/components/Form';
import { Button } from '@/src/components/Button';
import { useFormHooks } from '@/src/components/Form/useCases';

export const RegisterScreen = () => {
  const { control, handleSubmit, register,errors, defaultValues, onSubmit } 
  = useFormHooks();

  return (
    <Container>
      <Form.Root>
        <Form.TextInput
          {...register('name')}
          name='name'
          control={control}
          rules={{ required: 'Login Requerid' }}

          errorMessage={errors.name?.message}
          placeholder='name'
        />

        <Form.TextInput
          {...register('email')}
          name='email'

          control={control}
          rules={{ required: 'Login Requerid' }}

          errorMessage={errors.email?.message}
          placeholder='email'
        />

        <Form.TextInput
          {...register('password')}
          name='password'

          control={control}
          rules={{ required: 'Login Requerid' }}

          errorMessage={errors.password?.message}
          placeholder='password'
        />

        <Button.Action onPress={handleSubmit(onSubmit)}>
          <Text>Inscreva-se</Text>
          <Button.Icon name="chevron-forward-outline" color='#444' size={25} />
        </Button.Action>
      </Form.Root>
    </Container>
  );
};