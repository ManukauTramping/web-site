require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Manukau Tramping Club',
		author: 'Manukau Tramping Club',
		imageUrl: 'dummy content',
		description: 'Web site for Manukau Tramping Club.',
		keywords: `Tramping, Hiking, Club, Manukau, Auckland`,
		siteUrl: `https://www.manukautrampingclub.co.nz`
	},

	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACEID,
				accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
				forceFullSync: false,
			},
		},
		'gatsby-image',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Manukau',
				short_name: 'Manukau',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/hiking.png',
				//orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['node_modules/slick-carousel'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
		},
		`gatsby-plugin-layout`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-netlify`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
