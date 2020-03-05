import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<>
		<Helmet />
		<Header />
		<body className="has-navbar-fixed-top">
			<section className="section">
				<div className="container">
					{children}
				</div>
			</section>
		</body>
		<Footer />
	</>
);

export default Layout;
