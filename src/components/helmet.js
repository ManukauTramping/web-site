import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Helmet from 'react-helmet';

export default () => {
	const data = useStaticQuery(graphql`
			query helmetQuery {
				site {
					siteMetadata {
						title
						author
						imageUrl
						description
						keywords
					}
				}
			}
		`)

	return (
		<Helmet>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=5"
			/>
			<meta name="description" content={data.site.siteMetadata.description} />
			<meta name="keywords" content={data.site.siteMetadata.keywords} />
			<title>{data.site.siteMetadata.title}</title>
			<html lang="en" className={'has-navbar-fixed-top'} />
			{/* Google / Search Engine Meta Tags */}
			<meta itemProp="name" content={data.site.siteMetadata.author} />
			<meta
				itemProp="description"
				content={data.site.siteMetadata.description}
			/>
			{/*<meta itemprop="image" content={data.site.siteMetadata.imageUrl} />*/}
		</Helmet>
	)
}
