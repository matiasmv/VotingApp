
import {set_entries, next, vote} from './core';

export function reducer (state, action) {
	switch (action.type) {
		case 'SET_ENTRIES': return set_entries(state, action.entries); 

		case 'NEXT': return next(state);

		case 'VOTE': return vote(state, action.entry);
	}

	return state;
}