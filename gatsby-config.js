module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Anchor-Gatsby",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self'",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self'",
          // you can add your directives or override defaults
        },
      },
    },
  ],
};
