import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import './style.scss';

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

  React.useEffect(() => {
		// Get all "navbar-burger" elements
		const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	
		// Check if there are any navbar burgers
		if ($navbarBurgers.length > 0) {
	
			// Add a click event on each of them
			$navbarBurgers.forEach( el => {
				el.addEventListener('click', () => {
	
					// Get the target from the "data-target" attribute
					const target = el.dataset.target;
					const $target = document.getElementById(target);
	
					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
					el.classList.toggle('is-active');
					$target.classList.toggle('is-active');
	
				})
			})

			return function cleanup() {
				$navbarBurgers.forEach(el => el.removeEventListener('click'))
			}
		}
	})

	return (
		<nav className="navbar is-light is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a role="button" className="navbar-burger burger is-marginless" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarMenu" className="navbar-menu">
				<div className="navbar-start">
					{data.allContentfulPage.edges.map(({ node }) => {
						const slug = node.slug === "/"
							? node.slug
							: `/${node.slug}`

						return (
							<a className="navbar-item" href={slug}>
								{node.name}
							</a>
					)})}

					{data.allContentfulDropdownMenu.edges.map(({ node }) => 
						<div className="navbar-item has-dropdown is-hoverable">
							<div className="navbar-link">
								{node.title}
							</div>

							<div className="navbar-dropdown">
								{node.childPages.map(({name, slug}) => {
									const absoluteSlug = `/${slug}`

									return (
										<a className="navbar-item" href={absoluteSlug}>
											{name}
										</a>
								)})}
							</div>
						</div>							
					)}
				</div>
				<div className="navbar-end">
				</div>
			</div>
		</nav>
	)
}

export default Navbar;
