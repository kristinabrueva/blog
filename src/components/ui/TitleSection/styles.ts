import styled from 'styled-components';
import tw from 'twin.macro';

export interface StyledProps {
  center?: boolean;
}

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 text-lg font-bold w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.h4<StyledProps>`
  ${tw`text-xs text-indigo-600 w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;
