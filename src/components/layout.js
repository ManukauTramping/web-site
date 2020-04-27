import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import BackgroundSection from './backgroundSection';

const Layout = ({ children }) => (
	<BackgroundSection>
		<div className="container">
			<Helmet />
			<header>
				<Navbar />
			</header>
			<section className="hero">
				<div className="hero-body">
				</div>
			</section>
			<section className="section has-background-translucent">
				{children}
			</section>
			<Footer />
		</div>
	</BackgroundSection>
);

export default Layout;
