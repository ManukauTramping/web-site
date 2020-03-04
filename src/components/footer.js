import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';
import Emoji from './emoji';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SiteQuery {
				site {
					siteMetadata {
						title
						author
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light is-hidden-mobile">
				<div className="content has-text-centered is-size-7">
					Copyright 2020, {data.site.siteMetadata.title}
				</div>
			</footer>
		)}
	/>
);

export default Footer;
