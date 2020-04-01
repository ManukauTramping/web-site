import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"

import './style.scss';

const Navbar = () => {
	const [isBurgerActive, setIsBurgerActive ] = useState(false);

  const data = useStaticQuery(graphql`
    query MenuQuery {
			site {
				siteMetadata {
					author
				}
			}
			allContentfulPage(
					sort: {fields: menuItemOrder, order: ASC}, 
					filter: {menuItemOrder: {gt: 0}}
				) {
				edges {
					node {
						name
						slug
						menuItemOrder
					}
				}
			}
			allContentfulDropdownMenu(
					sort: {fields: order, order: ASC}
				) {
				edges {
					node {
						title
						order
						childPages {
							name
							slug
						}
					}
				}
			}
		}
  `)

	return (
		<nav className="navbar is-light is-fixed-top is-spaced container" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a role="button" className={`navbar-burger burger is-marginless ${ isBurgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"
					onClick={() => {
						setIsBurgerActive(!isBurgerActive);
						document.getElementById("navbarMenu").classList.toggle('is-active');
					}}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>

				<div className="navbar-item is-size-4 is-hidden-desktop">	
					{data.site.siteMetadata.author}
				</div>
			</div>

			<div id="navbarMenu" className="navbar-menu">
				<div className="navbar-start">
					{data.allContentfulPage.edges.map(({ node }) => {
						const slug = node.slug === "/"
							? node.slug
							: `/${node.slug}`

						return (
							<a key={node.name} className="navbar-item" href={slug}>
								{node.name}
							</a>
					)})}

					{data.allContentfulDropdownMenu.edges.map(({ node }) => 
						<div key={node.title} className="navbar-item has-dropdown is-hoverable">
							<div className="navbar-link">
								{node.title}
							</div>

							<div className="navbar-dropdown">
								{node.childPages.map(({name, slug}) => {
									const absoluteSlug = `/${slug}`

									return (
										<a key={name} className="navbar-item" href={absoluteSlug}>
											{name}
										</a>
								)})}
							</div>
						</div>							
					)}
				</div>
				<div className="navbar-end">
					<a className="navbar-item is-size-4" href="/">
						{data.site.siteMetadata.author}
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
