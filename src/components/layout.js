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
			<body className="has-navbar-fixed-top">
				<section className="">
					{children}
				</section>
			</body>
			<Footer />
		</div>
	</BackgroundSection>
);

export default Layout;
