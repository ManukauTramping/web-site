import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

const Footer = () => {
		const data = useStaticQuery(graphql`
			query SiteQuery {
				site {
					siteMetadata {
						author
					}
				}
			}
		`)

		return (
			<footer className="footer center has-background-info-dark has-text-light">
				<div className="content has-text-centered is-size-7">
					Copyright 2020, {data.site.siteMetadata.author}<br/>
					Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
					href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</div>
			</footer>
	)
}

export default Footer;
