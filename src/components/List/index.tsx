import React from 'react';
import * as S from '@/src/components/List/styled';
import { ItemSeparatorComponent } from '@/src/components/List/ItemSeparatorComponent';

type RenderItemElement = (item: any) => React.JSX.Element;

interface IList {
    data: any;
    renderItem: RenderItemElement;
};

export const List = ({ data, renderItem, ...listProps }: IList) => {
    return <S.List
        data={data}
        keyExtractor={(item: any) => item.id.toString()}

        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}

        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={({ item }) => renderItem(item)}
        {...listProps}
    />

}
