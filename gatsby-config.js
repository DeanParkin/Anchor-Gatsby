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
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: false,
        directives: {
          "script-src": "'self' 'unsafe-inline'",
          "style-src": "'unsafe-inline'",
          "object-src": "'none'",
          // you can add your directives or override defaults
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          "/*": [
            "strict-transport-security: max-age=31536001; includeSubDomains; preload;",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      },
    },
  ],
};
