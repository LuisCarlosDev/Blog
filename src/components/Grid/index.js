import React from 'react';

import { Container } from './styles';

import Limiter from '../Limiter';

export default function Grid({ children, ...props }) {
  return (
    <Container {...props}>
      <Limiter>{children}</Limiter>
    </Container>
  );
}
