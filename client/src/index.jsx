import React from 'react';
import ReactDOM from 'react-dom';

import Voting from './components/Voting';

const pairs = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <Voting pairs={pairs}></Voting>,
    document.getElementById('app')
); 