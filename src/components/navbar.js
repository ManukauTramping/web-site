import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"

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
		<nav className="navbar is-link is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<Link className="navbar-item is-size-3 is-size-4-mobile" to={'/'}>
					{data.site.siteMetadata.author}
				</Link>
				<a role="button" className={`navbar-burger burger ${ isBurgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"
					onClick={() => {
						setIsBurgerActive(!isBurgerActive);
						document.getElementById("navbarMenu").classList.toggle('is-active');
					}}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarMenu" className="navbar-menu">
				<div className="navbar-start">
				</div>
				<div className="navbar-end">
					{data.allContentfulPage.edges.map(({ node }) => {
						const slug = node.slug === "/"
								? node.slug
								: `/${node.slug}`

						return (
								<Link key={node.name} className="navbar-item is-size-5" to={slug}>
									{node.name}
								</Link>
						)})}

					{data.allContentfulDropdownMenu.edges.map(({ node }) =>
							<div key={node.title} className="navbar-item has-dropdown is-hoverable">
								<div className="navbar-link is-size-5">
									{node.title}
								</div>

								<div className="navbar-dropdown">
									{node.childPages.map(({name, slug}) =>
											<Link key={name} className="navbar-item is-size-5" to={`/${slug}`}>
												{name}
											</Link>
										)}
								</div>
							</div>
					)}
					<div className={'navbar-item'}>{'   '}</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
