import { graphql } from 'gatsby';
import DocsComponent from '../components/Docs';

export default DocsComponent;

export const query = graphql`query ($slug: String!) {
  mdx(fields: {slug: {eq: $slug}}) {
    id
    excerpt(pruneLength: 160)
    fields {
      slug
    }
    frontmatter {
      title
      description
      image
      disableTableOfContents
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED,)
        }
      }
    }
    body
    headings {
      depth
      value
    }
  }
}
`;
