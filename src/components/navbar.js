import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import './style.scss';
import bulmaLogo from '../images/bulma-logo.png';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
			allContentfulPage(
					sort: {fields: menuItemOrder, order: ASC}, 
					filter: {menuItemOrder: {gt: 0}}
				) {
				edges {
					node {
						name
						slug
					}
				}
			}
		}
  `)

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a
					className="navbar-item"
					href="/"
				>
					<img src={bulmaLogo} alt="Logo-2" />
				</a>
			</div>
			<div id="navbarMenuHeroA" className="navbar-menu">
				<div className="navbar-start">

					{data.allContentfulPage.edges.map(({ node }) => {
						const slug = `/${node.slug}`

						return (
							<a className="navbar-item" href={slug}>
								{node.name}
							</a>
					)})}
				</div>
				<div className="navbar-end">
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
