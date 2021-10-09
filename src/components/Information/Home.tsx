import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import Github from '../../images/Github.png';
import Email from '../../images/Email.png';
import Wordpress from '../../images/Wordpress.png';
import Block, { Blue } from './Block';

export default function Home() {
	return (
		<>
			<div className='m-2 p-3 dark:text-white'>
				<div className='text-center'>
					<img src={Logo} alt='Logo' className='w-20 mx-5 inline' />
				</div>
				<h1 className='font-bold text-center text-5xl dark:text-white'>
					The MAA{' '}
					<span className=' text-transparent bg-clip-text bg-blue-700 dark:bg-blue-500'>
						Contest Tester
					</span>
				</h1>
				<div className='flex flex-row flex-wrap justify-center'>
					<div className='m-2 p-3 text-lg md:text-xl max-w-2xl text-center'>
						An integrated testing environment designed to help you achieve your
						math contest goals by automatically{' '}
						<span className='font-bold'>organizing your progress</span> on your
						practice contests
					</div>
				</div>
				<div className='m-2 p-3 flex flex-row flex-wrap justify-center'>
					<Link to='/preview'>
						<button className='transition duration-100 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-4 m-2 text-2xl md:text-3xl transform hover:-translate-y-1 shadow-lg font-bold'>
							Preview
						</button>
					</Link>
				</div>
				<Block
					name={
						<div>
							<Blue>Extensive</Blue> Contest Support
						</div>
					}
				>
					<span className='font-bold text-md md:text-xl'>
						<ul>
							<li>
								<Blue> All AMC 8 </Blue> Contests (1999 -)
							</li>
							<li>
								<Blue> All AMC 10/12 </Blue> Contests (2000 -){' '}
							</li>
							<li>
								<Blue> All AIME</Blue> Contests (1983 -){' '}
							</li>
						</ul>
					</span>
				</Block>
				<Block
					name={
						<div>
							A <Blue> Systematic </Blue> Practice Workflow
						</div>
					}
				>
					<span className='font-bold text-md md:text-xl'>
						<ul>
							<li>
								<Blue>Automated</Blue> Contest Grading
							</li>
							<li>
								<Blue>Autosaved</Blue> Progress
							</li>
							<li> Levels and Achievements </li>
						</ul>
					</span>
				</Block>
				<div className='flex justify-center'>
					<div className='bg-gray-100 dark:bg-gray-800 m-2 p-3 rounded-xl flex-1 max-w-2xl text-center'>
						<h1 className='dark:text-white font-bold'> Contact </h1>
						<div className='flex flex-row flex-wrap justify-evenly'>
							<a
								href='https://blog.maatester.com'
								target='_blank'
								rel='noreferrer'
							>
								<button className='transition duration-100 bg-gradient-to-r from-gray-100 to-gray-400 text-white rounded-xl p-4 m-2 transform hover:-translate-y-1 shadow-lg'>
									<img
										src={Wordpress}
										alt='Wordpress Logo'
										className='w-9 h-9'
									/>
								</button>
							</a>
							<a
								href='https://github.com/junikimm717/MAA_Tester'
								target='_blank'
								rel='noreferrer'
							>
								<button className='transition duration-100 bg-gradient-to-r from-gray-600 to-black text-white rounded-xl p-4 m-2 transform hover:-translate-y-1 shadow-lg'>
									<img src={Github} alt='Github Logo' className='w-9 h-9' />
								</button>
							</a>
							<a
								href='mailto:maatesterapp703.gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<button className='transition duration-100 bg-gradient-to-r from-gray-100 to-gray-400 text-white rounded-xl p-4 m-2 transform hover:-translate-y-1 shadow-lg'>
									<img src={Email} alt='Email Logo' className='w-9 h-9' />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
