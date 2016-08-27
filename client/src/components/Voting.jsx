import React from 'react';

export default class Voting extends React.Component {
    getPairs () {
        return this.props.pairs || [];
    }
    render () {
        return (
            <div className="voting">
                {this.getPairs().map(entry => 
                    <button key={entry}>
                        <h1>{entry}</h1>
                    </button>
                )}
            </div>
        );
    }
}