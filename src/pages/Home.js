import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Utilities.css';
import '../styles/Common.css';

export default function PageNotFound() {
	useEffect(() => {
		document.title = 'The YouTube Community';
	});
	
	return (
		<>
			<Header />
			<Footer />
		</>
	);
}
