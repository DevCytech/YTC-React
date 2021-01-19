import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Utilities.css';
import '../styles/Common.css';
import '../styles/Misc.css';

export default function ComingSoon() {
	useEffect(() => {
		document.title = 'Coming Soon!';
	});
	return (
		<>
			<Header />
			<div className='main container flex flex-down'>
				<h2>⚠️ This page is under development! ⚠️</h2>
				<p>
					Please come again in a few days when this page is complete!
				</p>
			</div>
			<Footer />
		</>
	);
}
