import React from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/src/components/Form';

import { Wrapper, Container } from "./styled";
import { List } from '@/src/components/List';
import { useSearch } from './useSearch';
import { Button } from '@/src/components/Button';
import { Text } from '@/src/components/Text';
import { Loading } from '@/src/components/Loading';

// const Loading = "Busque.." //` busque profissionais cargos funções estágios; `

export const SearchScreen = () => {
  const { DATA, RenderSearchItem } = useSearch();
  const { control } = useForm();

  return (
    <Wrapper>
      <Container>
        <Form.Root>
          <Form.TextInput
            name='buscar'
            control={control}
            errorMessage='test'
            placeholder='buscar'
            label='test'
            rules={{
              required: 'Busca requerida!'
            }}
          />

        </Form.Root>
        <Button.Action onPress={() => ""}>
          <Button.Icon size={30} color='#444' name="filter-outline" />
        </Button.Action>

      </Container>
      <List 
        data={DATA} 
        renderItem={RenderSearchItem} 
      />
    </Wrapper>
  );
};