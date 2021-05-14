const withDefault = require(`./util/with-default`);

module.exports = (options) => {
  const { basePath, configPath, docsPath, withMdx, imgPath } = withDefault(options);

  return {
    siteMetadata: {
      basePath,
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `theme-ui`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
                backgroundColor: `rgba(0,0,0,0)`,
                disableBgImageOnAlpha: true,
              },
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          // Defaults used for gatsbyImageData and StaticImage
          // Set to false to allow builds to continue on image errors
          failOnError: false,
          cropFocus: `CENTER`,
          toFormat: `PNG`,
          fit: `COVER`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `docs`,
          path: docsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `config`,
          path: configPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imgPath,
        },
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `SidebarItems`,
        },
      },
      withMdx && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-embedder`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
                withWebp: true,
                linkImagesToOriginal: false,
                backgroundColor: `rgba(0,0,0,0)`,
                disableBgImageOnAlpha: true,
              },
            },
            `gatsby-remark-responsive-iframe`,
            `gatsby-remark-copy-linked-files`,
          ],
          plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-images`],
        },
      },
    ].filter(Boolean),
  };
};
