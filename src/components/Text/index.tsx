import styled from "styled-components/native";

type IThemedTextProps = {
    // type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle';
    title?: boolean;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
};

export const Text = styled.Text<IThemedTextProps>`
    color: #555;
    ${({ title, large, medium, small }: IThemedTextProps) => {
        switch (true) {
            case title:
                return `font-size: 27px` //`${theme.FONTS.MEDIUM}`;
            case large:
                return `font-size: 20px`//`${theme.FONTS.REGULAR}`;
            case medium:
                return `font-size: 16px`//`${theme.FONTS.REGULAR}`;
            case small:
                return `font-size: 14px` //`${theme.FONTS.SMALL}`;
        }
    } }
`;


