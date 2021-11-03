module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Anchor-Gatsby",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: false, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: false,
    //     directives: {
    //       "script-src": "'self'",
    //       "style-src": "'self'",
    //       "object-src": "'none'",
    //       // you can add your directives or override defaults
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SPF-Decorating`,
        short_name: `SPF`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b3d6d2`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/src/images/icon.png*"],
        },
      },
    },
  ],
};
