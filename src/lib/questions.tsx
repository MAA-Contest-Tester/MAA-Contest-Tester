import React from 'react';

export enum AnswerState {
	undefined = 0,
	correct = 1,
	incorrect = 2,
}

export const getAnswerStateEl = (state: AnswerState) => {
	if (state === AnswerState.correct) {
		return (
			<div className='m-2 p-1 bg-green-500 text-center text-white rounded-lg flex-auto flex'>
				<div className='m-auto'>Correct</div>
			</div>
		);
	} else if (state === AnswerState.incorrect) {
		return (
			<div className='m-2 p-1 bg-red-500 text-center text-white rounded-lg flex-auto flex'>
				<div className='m-auto'>Incorrect</div>
			</div>
		);
	} else {
		return (
			<div className='m-2 p-1 bg-blue-800 text-center text-white rounded-lg flex-auto flex'>
				<div className='m-auto'>Not Solved</div>
			</div>
		);
	}
};

export const defaults = (number: number): [number[], any[], AnswerState[]] => {
	const ar: number[] = [];
	const a: (number | null | string)[] = [];
	const b: AnswerState[] = [];
	for (let i: number = 0; i < number; i++) {
		ar.push(i);
		a.push(null);
		b.push(AnswerState.undefined);
	}
	return [ar, a, b];
};