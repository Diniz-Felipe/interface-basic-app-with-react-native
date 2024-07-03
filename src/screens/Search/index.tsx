import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@/src/components/Form';

import { Wrapper, Container } from "./styled";
import { List } from '@/src/components/List';
import { useSearch } from './useSearch';
import { IData } from './useSearch';
import { Button } from '@/src/components/Button';

// const Loading = "Busque.." //` busque profissionais cargos funções estágios; `

export const SearchScreen = () => {
  const { DATA, RenderSearchItem } = useSearch();
  const { control, handleSubmit } = useForm();
  const [filteredData, setFilteredData] = useState<IData[]>(DATA);

  const filterData = (query: string) => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = DATA.filter(item =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.id.toString().includes(lowerCaseQuery)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(DATA);
    }
  };

  const onSubmit = (data: any) => {
    filterData(data.search);
  };

  return (
    <Wrapper>
      <Container>
        <Form.Root>
          <Form.TextInput
            name='search'
            control={control}
            errorMessage='test Error'
            placeholder='search'
            label='test'
            rules={{
              required: 'Busca requerida!'
            }}
          />
        </Form.Root>

        <Button.Action onPress={handleSubmit(onSubmit)}>
          <Button.Icon size={30} color='#444' name="filter-outline" />
        </Button.Action>

      </Container>

      <List
        data={filteredData}
        renderItem={RenderSearchItem}
      />
    </Wrapper>
  );
};