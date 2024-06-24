import React from 'react';
import { Form } from '@/src/components/Form';
import { useForm } from 'react-hook-form';
import { Container } from './styled';
import { Button } from '@/src/components/Button';
import { Text } from '@/src/components/Text';
import { useFormHook } from '@/src/components/Form/useCases';

export const LoginScreen = () => {
  const {control, handleSubmit} = useForm();
  const { onSubmit } = useFormHook();
  return (
    <Container>
      <Form.Root>
        <Form.TextInput 
          name='Email' 
          control={control} 
          rules={{ required: 'Login Requerid' }} 
          
          errorMessage='test' 
          label='test' 
          placeholder='email'
        />
        
        <Form.TextInput 
          name='Password' 
          control={control} 
          rules={{required: 'Login Requerid'}} 

          errorMessage='test' 
          label='test' 
          placeholder='password'
        />
        <Button.Root>

        <Button.Action onPress={handleSubmit(onSubmit)}>
          <Text>Entrar</Text>
          <Button.Icon name="chevron-forward-outline" color='#444' size={25} />
        </Button.Action>
        </Button.Root>
      </Form.Root>
    </Container>
  )
}
