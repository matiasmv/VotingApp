import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
	describe('a number', () => {

		const increment = state => state + 1;

		it('it is immutable', () => {
			const state = 42;
			const nextState = increment(state);

			expect(state).to.equal(42);
			expect(nextState).to.equal(43);
		});
	});

	describe('a list', () => {
		const addMovie = (state, movie) => state.push(movie);

		it('it is immutable', () => {

			const state = List.of('Trainspotting', '28 Days Later');
			const nextState = addMovie(state, 'Sunshine');

			expect(state).to.equal(List.of('Trainspotting', '28 Days Later'));
			expect(nextState).to.equal(List.of('Trainspotting', '28 Days Later','Sunshine'));
		});

	});

	describe('a tree', () => {
		const addMovie = (state, movie) => state.update('movies', movies => movies.push(movie)); 

		it('it is immutable', () => {
			const state =  Map({
				movies: List.of('Trainspotting', '28 Days Later')
			});

			const nextState = addMovie(state, 'Sunshine');

			expect(state).to.equal(Map({
				movies: List.of('Trainspotting', '28 Days Later')
			}));
			expect(nextState).to.equal(Map({
				movies: List.of('Trainspotting', '28 Days Later', 'Sunshine')
			}));
		});
	});
});