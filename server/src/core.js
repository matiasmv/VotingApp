import {List, Map} from 'Immutable';

export function setEntries (state, entries) {
  	return state.set('entries', List(entries));
}

export function next (state) {
	const getWinners = (state) => {
		const vote = state.get('vote');
		if (!vote)  return [];

		const [a, b] = vote.get('pair');
		const aVotes = vote.getIn(['tally', a], 0);
		const bVotes = vote.getIn(['tally', b], 0);

		if (aVotes > bVotes) return [a];
		else if (bVotes > aVotes) return [b];
		else return [a, b];
	};

  	const entries = state.get('entries').concat(getWinners(state));
	if (entries.size === 1) {
		return state.remove('vote')
					.remove('entries')
					.set('winner', entries.first());

	} else {
		return state.merge({
			entries: entries.skip(2),
			vote: Map({
				pair: entries.take(2)
			})
		});
	}
}

export function vote (state, entry) {
	return state.updateIn(['vote', 'tally', entry], 0, tally => tally + 1);
}