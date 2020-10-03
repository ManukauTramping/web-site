import React from 'react';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
	<>
		<Helmet />
		<header>
			<Navbar />
		</header>
		<section className="section">
			<article className={"has-background-info-light is-size-6"}>
				{children}
			</article>
		</section>
		<Footer />
	</>
);

export default Layout;
