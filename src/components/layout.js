import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Header />
		<body>
			<section className="section">
				<div className="container">
					{children}
				</div>
			</section>
		</body>
		<Footer />
	</div>
);

export default Layout;
