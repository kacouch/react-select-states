import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import States from './States';
import './example.less';
import ReactTypeahead from 'react-typeahead';


/*
ReactDOM.render(
        <ReactTypeahead.Typeahead
            options={['John', 'Paul', 'George', 'Ringo']}
            maxVisible={2}
        />,
        document.getElementById('example')
);
*/

ReactDOM.render(
    <div>
        <States label="States" searchable />
    </div>,
    document.getElementById('example')
);

