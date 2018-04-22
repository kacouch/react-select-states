import React from 'react';
import './App.css';
import 'react-sliding-pane/dist/react-sliding-pane.css';
//import Select from 'react-select';
import Select from './Select';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

const STATES = require('./data-states');

var StatesField = createClass({
    displayName: 'StatesField',
    propTypes: {
        label: PropTypes.string,
        searchable: PropTypes.bool,
    },
    getDefaultProps () {
        return {
            label: 'States:',
            searchable: true,
        };
    },
    getInitialState () {
        return {
            country: 'AU',
            disabled: false,
            searchable: this.props.searchable,
            selectValue: 'new-south-wales',
            clearable: true,
            rtl: false,
        };
    },
    clearValue (e) {
        this.select.setInputValue('');
    },
    switchCountry (e) {
        var newCountry = e.target.value;
        this.setState({
            country: newCountry,
            selectValue: null,
        });
    },
    updateValue (newValue) {
        this.setState({
            selectValue: newValue,
        });
    },
    focusStateSelect () {
        this.refs.stateSelect.focus();
    },
    toggleCheckbox (e) {
        let newState = {};
        newState[e.target.name] = e.target.checked;
        this.setState(newState);
    },
    render () {
        var options = STATES[this.state.country];
        return (
            <div className="section">
                <h3 className="section-heading">{this.props.label} <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/States.js">(Source)</a></h3>
                <Select
                    options={options}
                    value={this.state.selectValue}
                    onChange={this.updateValue}
                />
                <button style={{ marginTop: '15px' }} type="button" onClick={this.focusStateSelect}>Focus Select</button>
                <button style={{ marginTop: '15px' }} type="button" onClick={this.clearValue}>Clear Value</button>

                <div className="checkbox-list">

                    <label className="checkbox">
                        <input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
                        <span className="checkbox-label">Searchable</span>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
                        <span className="checkbox-label">Disabled</span>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
                        <span className="checkbox-label">Clearable</span>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" className="checkbox-control" name="rtl" checked={this.state.rtl} onChange={this.toggleCheckbox}/>
                        <span className="checkbox-label">rtl</span>
                    </label>
                </div>
                <div className="checkbox-list">
                    <label className="checkbox">
                        <input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry}/>
                        <span className="checkbox-label">Australia</span>
                    </label>
                    <label className="checkbox">
                        <input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry}/>
                        <span className="checkbox-label">United States</span>
                    </label>
                </div>
            </div>
        );
    }
});


export default StatesField;
//module.exports = StatesField;
