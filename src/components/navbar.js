import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`query MenuQuery {
  site {
    siteMetadata {
      author
    }
  }
  allContentfulPage(sort: {menuItemOrder: ASC}, filter: {menuItemOrder: {gt: 0}}) {
    edges {
      node {
        name
        slug
        menuItemOrder
      }
    }
  }
  allContentfulDropdownMenu(sort: {order: ASC}) {
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
}`)

	const [isBurgerActive, setIsBurgerActive ] = useState(false);

	return (
		<nav className="navbar is-link is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<Link className="navbar-item is-size-3 is-size-4-mobile" to={'/'}>
					{data.site.siteMetadata.author}
				</Link>
				<a role="button" className={`navbar-burger burger ${ isBurgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"
					onClick={() => setIsBurgerActive(!isBurgerActive)}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarMenu" className={`navbar-menu ${ isBurgerActive ? 'is-active' : ''}`}>
				<div className="navbar-start">
				</div>
				<div className="navbar-end">
					{data.allContentfulPage.edges.map(({ node }) => {
						const slug = node.slug === "/"
								? node.slug
								: `/${node.slug}`

						return (
								<Link key={node.name} className="navbar-item is-size-5" to={slug}
											onClick={() => setIsBurgerActive(!isBurgerActive)}>
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
											<Link key={name} className="navbar-item is-size-5" to={`/${slug}`}
														onClick={() => setIsBurgerActive(!isBurgerActive)}>
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
