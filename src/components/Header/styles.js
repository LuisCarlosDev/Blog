import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

import { StackOrder, Heights, Sizes, Color, Media } from '../../styles/constants';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${StackOrder.header};

  width: 100%;

  background-color: ${Color.darker};
  border-bottom: 1px solid ${Color.border};
`;

export const Content = styled(Link)`
  text-decoration: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: fit-content;
  height: ${Heights.headerLg};

  ${media.lessThan(`${Media.xs}px`)`
    height: ${Heights.headerSm};
  `}
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: ${Sizes.sm};

    ${media.lessThan(`${Media.xs}px`)`
      margin-left: ${Sizes.xs};
    `}
  }
`;

export const Heading = styled.h1`
  color: ${Color.green};

  font-family: 'Fira Code', sans-serif;
  font-size: 1.7rem;

  ${media.lessThan(`${Media.xs}px`)`
    font-size: 1.3rem;
  `}
`;

export const Code = styled.span`
  color: ${Color.pink};
`;
