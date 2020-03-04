import React from 'react';

import './style.scss';

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="gradientBg is-fullheight-with-navbar">
		<Navbar />
	</section>
);

export default Header;
