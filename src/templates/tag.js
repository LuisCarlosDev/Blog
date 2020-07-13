import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Posts from '../components/Post';

import SEO from '../components/SEO';

export default class Tag extends Component {
  render() {
    const { data, pathContext } = this.props;
    const { tag } = pathContext;

    return (
      <Layout>
        <div>
          <SEO
            pageTitle={`Tag: ${tag}`}
            pageDescription={`Veja todo o conteúdo relacionado com a tag ${tag} no blog do Luis Carlos.`}
          />
          <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>
            Todos os posts com a tag: {tag} do Luis Carlos
          </h2>
          <Posts data={data} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
          }
        }
      }
    }
  }
`;
