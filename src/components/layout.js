import React from 'react';
import './style.scss';
import Helmet from './helmet';
import Navbar from './navbar';
import Footer from './footer';
import PhotoCarousel from './photoCarouselSlick';

const Layout = ({ photoCarouselSlideCount, children }) => (
	<>
		<Helmet />
		<header>
			<Navbar />
		</header>
		<section className="section">
			<article>
				{photoCarouselSlideCount &&
					<>
						{photoCarouselSlideCount == 1
							? <div style={{float: `left`, width: `50%`, marginRight: `20px`}} className={'is-hidden-mobile'}>
									<PhotoCarousel name="Primary" slideCount={photoCarouselSlideCount}/>
								</div>
							: <div className={'is-hidden-mobile'}>
									<PhotoCarousel name="Primary" slideCount={2}/>
								</div>
						}
						<div className={'is-hidden-tablet'}>
							<PhotoCarousel name="Primary" slideCount={1} />
						</div>
					</>
				}
				{children}
			</article>
		</section>
		<Footer />
	</>
);

export default Layout;
