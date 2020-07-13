import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyles from '../../styles/global';
import Header from '../Header';

import { Page, Body, Container } from './styles';

export default function Layout({ children }) {
  return (
    <Page>
      <GlobalStyles />

      <Header />

      <Body>
        <Container>{children}</Container>
      </Body>
    </Page>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
