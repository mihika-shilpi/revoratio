module.exports = {
  pathPrefix: "/revoratio",
  siteMetadata: {
    siteTitle: `Revoratio Docs`,
    defaultTitle: `Revoratio Docs`,
    siteTitleShort: `Revoratio Docs`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteImage: `static/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
    siteUrl: `https://www.revoratio.com`,
    siteAuthor: `Mihika Shilpi`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `gatsby-theme-revoratio`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        imgPath: `static`,
        repositoryUrl: `https://github.com/revoratio/gatsby-themes`,
        baseDir: `demo`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `revoratio Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Playfair Display",
              variants: ["300", "400", "500"],
            },
            {
              family: "Montserrat",
              variants: ["300", "400", "500"],
            },
          ],
        },
      },
    },
  ],
};
