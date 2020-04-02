import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

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
			<footer className="footer center has-background-grey-light">
				<div className="content has-text-centered is-size-7">
					Copyright 2020, {data.site.siteMetadata.author}
				</div>
			</footer>
		)}
	/>
);

export default Footer;
