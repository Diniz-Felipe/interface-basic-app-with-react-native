import React from 'react';
import * as S from './styled';

type RenderItemElement = (item: any) => React.JSX.Element;

export type ISectionsData = {
    title: string;
    data: string[];
};

interface ISectionList {
    renderItem: RenderItemElement;
    renderSectionHeader: RenderItemElement;
    sections: ISectionsData[];
};

export const SectionList = ({ renderItem, sections, renderSectionHeader ,...rest }: ISectionList) => {
    return (
        <S.SectionList
            sections={sections}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={S.ItemSeparatorComponent}
            renderSectionHeader={renderSectionHeader}
            renderItem={({section}) => renderItem(section)}
            {...rest}
        />
    );
};