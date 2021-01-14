import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Utilities.css';
import '../styles/Common.css';

export default function Header() {
	return (
		<>
			<div class='navbar'>
				<div class='container full flex'>
					<Link class='logo flex' to='/'>
						<img
							src='/assets/logo.png'
							alt='The YouTube Community!'
						/>
					</Link>
					<nav>
						<ul>
							<li>
								<Link className='button' to='/'>
									Home
								</Link>
								<Link className='button' to='/info'>
									FAQ
								</Link>
								<Link className='button' to='/store'>
									Store
								</Link>
								<Link className='button' to='/discord'>
									Discord
								</Link>
								<Link className='button' to='/login'>
									Login
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}
