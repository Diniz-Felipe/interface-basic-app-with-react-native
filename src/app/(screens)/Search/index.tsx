import React, { Suspense, useState } from 'react';

import { Form } from '@/src/components/Form';

import { Wrapper, Container } from "./styled";
import { List } from '@/src/components/List';
import { useSearch } from './useSearch';
import { IData } from './useSearch';
import { Button } from '@/src/components/Button';
import { RenderSearchItem } from './RenderSearchItem';
import { useFormHooks } from '@/src/components/Form/useCases';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Text } from '@/src/components/Text';

// const Loading = "Busque.." //` busque profissionais cargos funções estágios; `

const SearchScreen = () => {
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
      <Suspense>
        {/* logged */}
        <SignedIn>

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
        </SignedIn>

        {/* not logged in */}
        <SignedOut>
          <Text> faça login ou inscreva-se </Text>
        </SignedOut>
      </Suspense>
    </Wrapper>
  );
};
export default SearchScreen