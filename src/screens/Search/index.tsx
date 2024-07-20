import React, { useState } from 'react';

import { Form } from '@/src/components/Form';

import { Wrapper, Container } from "./styled";
import { List } from '@/src/components/List';
import { useSearch } from './useSearch';
import { IData } from './useSearch';
import { Button } from '@/src/components/Button';
import { RenderSearchItem } from './RenderSearchItem';
import { useFormHooks } from '@/src/components/Form/useCases';

// const Loading = "Busque.." //` busque profissionais cargos funções estágios; `

export const SearchScreen = () => {
  const { DATA } = useSearch();
  const { control, handleSubmit, errors, register } = useFormHooks();
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
            //{...register('search')}
            name='search'
            control={control}
            errorMessage={errors.search?.message}
            placeholder='search'
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