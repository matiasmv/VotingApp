import {expect} from 'chai';
import {fromJS, Map} from 'Immutable';

import reducer from './../src/reducer';

describe('reducer', () => {

	it('handlers SET_ENTRIES', () => {
		const state = Map({});
		const action = {
			type: 'SET_ENTRIES',
			entries: ['Trainspotting']
		};

		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			entries: ['Trainspotting']
		}))
	});

	it('handlers NEXT', () => {
		const state = fromJS({
			entries: ['Trainspotting', '28 Days Later']
		});

		const action = {type: 'NEXT'};
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			vote:{
				pair:['Trainspotting', '28 Days Later']
			},
			entries: []
		}));

	});

	it('handlers VOTE', () => {

		const state = fromJS({
			vote:{
				pair:['Trainspotting', '28 Days Later']
			},
			entries: []
		});
		const action = {type: 'VOTE', entry:'Trainspotting' }
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			vote:{
				pair:['Trainspotting', '28 Days Later'],
				tally:{
					Trainspotting: 1
				}
			},
			entries: []
		}));

	});

});