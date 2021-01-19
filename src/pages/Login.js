import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Utilities.css';
import '../styles/Common.css';
import '../styles/Misc.css';

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			throw new Error('testing');
		} catch (err) {
			console.log(err);
			setError('Failed to Sign in.');
		}
	}

	return (
		<>
			<Header />
			<div className='main flex container flex-down'>
				<div className='card flex flex-down'>
					<h2>Login</h2>
					{error && (
						<div className='alert alert-error'>
							<p>{error}</p>
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<p>Email</p>
						<input type='email' ref={emailRef} required />
						<p>Password</p>
						<input type='password' ref={passwordRef} required />
						<br />
						<button type='submit'>Login</button>
					</form>
					<br />
					<Link className='link' to='/forgot-password'>
						Forgot Password
					</Link>
				</div>
				<Link className='btn link' to='/forgot-password'>
					Forgot Password
				</Link>
			</div>
			<Footer />
		</>
	);
}
