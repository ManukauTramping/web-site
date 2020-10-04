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
			{children}
		</section>
		<Footer />
	</>
);

export default Layout;
