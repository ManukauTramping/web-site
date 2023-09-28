import React from 'react';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ withCarousel, children }) => (
	<>
		<Helmet />
		<section>
			<header className="sticky-header">
				<Navbar />
			</header>
			<section className={`section has-background-success-light ${withCarousel ? 'pt-0' : 'pt-5'}`}>
				{children}
			</section>
			<Footer />
		</section>
	</>
);

export default Layout;
