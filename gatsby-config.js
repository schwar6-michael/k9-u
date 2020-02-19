module.exports = {
  siteMetadata: {
    title: `K9 University - New York`,
    description: `Professional services for you pup in the new york area`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `z8p1n736d6jl`,
        accessToken: "7PG0yNlRKjpaKjRsdlFMv8yMQJAWRk0LXcc7UmHb4js",
      },
    },
  ],
}
