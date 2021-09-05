import React, { useState, useEffect } from 'react';
import { getAllAMC, getAllAIME, ContestYear } from '../lib/fetchContests';
import { Link } from 'react-router-dom';
import { getExamsSolved } from '../lib/user_db';
import { perfectScore } from '../lib/grade';

enum ContestMenuType {
	AMC8,
	AMC10,
	AMC12,
	AIME,
}

const results = new Map<ContestMenuType, ContestYear[]>();
results.set(ContestMenuType.AMC8, getAllAMC(8));
results.set(ContestMenuType.AMC10, getAllAMC(10));
results.set(ContestMenuType.AMC12, getAllAMC(12));
results.set(ContestMenuType.AIME, getAllAIME());

function MenuItem(props: { name: string; done?: boolean; perfect?: boolean }) {
	const title = props.name.split('_').join(' ');
	return (
		<Link to={`/${props.name}`}>
			<div
				className={
					'w-56 mx-1 my-2 shadow-lg hover:shadow-xl rounded-xl p-3 text-center' +
					' ' +
					(props.perfect
						? 'bg-green-100'
						: props.done
						? 'bg-yellow-100'
						: 'bg-gray-100')
				}
			>
				<div className='text-xl'> {title} </div>
			</div>
		</Link>
	);
}

export default function ContestMenu(props: { email: string }) {
	const [contestType, setContestType] = useState(ContestMenuType.AMC8);
	const [solved, setSolved] = useState(new Set<string>());
	const [perfect, setPerfect] = useState(new Set<string>());
	useEffect(() => {
		getExamsSolved(props.email)
			.then((result) => {
				const s: Set<string> = new Set();
				const p: Set<string> = new Set();
				result.forEach((d: any) => {
					if (d.exam) {
						s.add(d.exam);
						if (d.score && perfectScore(d.score)) {
							p.add(d.exam);
						}
					}
				});
				setSolved(s);
				setPerfect(p);
			})
			.catch((e) => console.log('error', e));
	}, [props.email]);

	return (
		<>
			<div className='flex'>
				<div className='p-2 rounded-lg bg-green-200 flex-none text-black'>
					Logged in as {props.email}
				</div>
			</div>
			<h1 className='p-3'> Contests </h1>
			<div className='flex flex-row py-2'>
				{['AMC 8', 'AMC 10', 'AMC 12', 'AIME'].map((val, index) => (
					<button
						className={
							'w-56 rounded-lg m-2 my-3 p-3 text-lg hover:shadow-2xl text-center' +
							' ' +
							(index === contestType
								? 'bg-green-200 shadow-2xl'
								: 'bg-blue-100 shadow-lg')
						}
						key={'MenuBar' + index}
						onClick={(e) => {
							setContestType(index);
						}}
					>
						{val}
					</button>
				))}
			</div>
			{results.get(contestType)!.map((y: ContestYear) => (
				<>
					<h2 className='text-2xl m-2'>{y.year}</h2>
					<div className='flex flex-row flex-wrap'>
						{y.contests.map((s) => (
							<MenuItem
								name={s}
								done={solved.has(s)}
								perfect={perfect.has(s)}
							/>
						))}
					</div>
				</>
			))}
		</>
	);
}