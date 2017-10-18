import React, { Component } from 'react';
import data from './data';

class Input extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: data
        };

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }
    
    render() {
        return (
            <textarea defaultValue={this.state.text} onInput={event => this.inputChangeHandler(event.target.value)} cols="60" rows="35" className="markdown-textarea"/>
        );
    }

    inputChangeHandler(value) {
        this.setState({
           text: value
        }, () => this.props.onInputChange(this.state.text));
    }
}

export default Input;