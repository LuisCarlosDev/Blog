/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

export default class Post extends Component {
  render() {
    const { data } = this.props;
    const { fields } = data.markdownRemark;
    const { slug } = fields;
    const { title, tags, date, description } = data.markdownRemark.frontmatter;
    const { html } = data.markdownRemark;
    return (
      //
      <Layout>
        <div>
          <SEO title={title} url={slug} description={description} article />
          <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>{title}</h2>
          <p>
            {tags.map(tag => (
              <Link
                style={{ color: '#000', marginRight: '10px' }}
                key={tag}
                to={`/tag/${_.kebabCase(tag)}`}
              >
                {tag}
              </Link>
            ))}
          </p>
          <p>{date}</p>
          <div className="content">
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;
