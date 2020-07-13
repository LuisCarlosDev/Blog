import React from 'react';

import useResponsive from '../../hooks/useResponsive';
import Limiter from '../Limiter';

import { Container, Content, Brand, Heading, Code } from './styles';

export default function Header() {
  const { lessThanExtraSmall } = useResponsive();

  return (
    <Container>
      <Limiter>
        <Content to="/">
          <Brand>
            <Heading>
              <Code>{'<'}</Code>
              {lessThanExtraSmall ? 'Luis' : 'Luis Carlos'}
              <Code>{'/>'}</Code>
            </Heading>
          </Brand>
        </Content>
      </Limiter>
    </Container>
  );
}
