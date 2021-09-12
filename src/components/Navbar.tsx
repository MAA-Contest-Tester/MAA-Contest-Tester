import React, { useState } from 'react';

import { auth, LogIn, LogOut } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Home from '../svg/Home.svg';
import Remove from '../svg/Remove.svg';
import Plus from '../svg/Plus.svg';

export default function Navbar() {
	const [user] = useAuthState(auth);
	const hiddenState = localStorage.getItem('maatester_navbarmode') === 'true';
	const [hidden, setHidden] = useState(hiddenState);
	return (
		<>
			{hidden ? (
				<div className='sticky left-0 top-0 z-50'>
					<div className='relative'>
						<div className='absolute left-0'>
							<button
								className='text-white bg-yellow-400 dark:bg-yellow-600 shadow-lg mx-3 my-3 px-2 py-5 rounded-lg text-2xl font-bold text-center'
								onClick={() => {
									setHidden(false);
									localStorage.setItem('maatester_navbarmode', 'false');
								}}
							>
								<img src={Plus} className='w-5' alt='expand navbar' />
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className='sticky left-3 top-3 bg-yellow-400 dark:bg-yellow-600 shadow-lg rounded-lg flex flex-row flex-wrap justify-between items-center m-3 p-1 z-50'>
					<div className='flex flex-row'>
						<button
							className='text-white mx-1 my-2 px-2 py-4 text-2xl rounded-lg font-bold text-center'
							onClick={() => {
								setHidden(true);
								localStorage.setItem('maatester_navbarmode', 'true');
							}}
						>
							<img src={Remove} className='w-5' alt='remove navbar' />
						</button>
					</div>
					<Link to='/'>
						<div className='font-bold text-center text-2xl m-2 p-1 dark:text-white'>
							The MAA Contest Tester
						</div>
					</Link>
					{user ? (
						<>
							<div className='p-4 m-2 text-lg bg-gradient-to-r from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 text-black dark:text-white rounded-xl shadow-sm'>
								<span className='font-bold'>{user.email}</span>
							</div>
							<div className='flex flex-wrap flex-row justify-between'>
								<Link to='/home'>
									<div className='auth'>
										<img src={Home} className='w-7' alt='Home Logo' />
									</div>
								</Link>
								<LogOut />
							</div>
						</>
					) : (
						<div className='flex flex-wrap flex-row justify-between'>
							<LogIn />
						</div>
					)}
				</div>
			)}
		</>
	);
}
