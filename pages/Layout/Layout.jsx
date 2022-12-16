'use client';

import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<>
			<Nav />
			<div id='layout-children'>{children}</div>
			<Footer />
		</>
	);
}
