import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SiteQuery {
				site {
					siteMetadata {
						author
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-info-dark has-text-light">
				<div className="content has-text-centered is-size-7">
					Copyright 2020, {data.site.siteMetadata.author}
					{/*Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
				</div>
			</footer>
		)}
	/>
);

export default Footer;
