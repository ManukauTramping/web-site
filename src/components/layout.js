import React from 'react';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
	<>
		<Helmet />
		<div className={'sticky-footer-layout'}>
			<header>
				<Navbar />
			</header>
			<section className="section has-background-success-light" style={{flexGrow: '1'}}>
				{children}
			</section>
			<Footer style={{flexShrink: '0'}} />
		</div>
	</>
);

export default Layout;
