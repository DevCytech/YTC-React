import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Utilities.css';
import '../styles/Common.css';

export default function PageNotFound() {
	return (
		<>
			<Header />
			<div class='main container flex flex-down'>
				<h2>404</h2>
				<p>
					We could not find the page your are looking for. Sorry for
					the inconvenience.
				</p>
				<br />
				<p>
					We know this is an annoying error. We don't like it too. So
					please take a cookie, complements of Cytech and Creepa.
				</p>
				<p>🍪🍪🍪🍪🍪🍪</p>
			</div>
			<Footer />
		</>
	);
}
