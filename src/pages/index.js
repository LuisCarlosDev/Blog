import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import Post from '../components/Post';
import Presentation from '../components/Presentation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default class Index extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <SEO title="Luis Carlos " />
        <Grid>
          <Presentation />
          <Post data={data} />
        </Grid>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            tags
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
