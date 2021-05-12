const withDefault = require('gatsby-theme-revoratio-core/util/with-default');

module.exports = (options) => {
  const themeOtions = withDefault(options);

  return {
    siteMetadata: {
      defaultTitle: `Gatsby Themes from revoratio`,
      siteTitle: `revoratio Gatsby Themes`,
      siteTitleShort: `revoratio Gatsby Themes`,
      siteDescription: `Discover free Gatsby themes, plugins and templates created with love by revoratio.`,
      siteImage: `/banner.png`,
      siteLanguage: `en`,
      basePath: themeOtions.basePath,
      docsPath: themeOtions.docsPath,
    },
    plugins: [
      {
        resolve: `gatsby-theme-revoratio-core`,
        options: themeOtions,
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          fonts: {
            google: [
              {
                family: "Inter",
                variants: ["300", "400", "500"],
              },
            ],
          },
        },
      },
    ].filter(Boolean),
  };
};
