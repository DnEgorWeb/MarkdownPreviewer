import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import Output from './components/Output';
import data from './components/data';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: data
        };

        this.changeOutput = this.changeOutput.bind(this);
    }

    render() {
        return (
            <div>
                <header>
                    <h1 className="markdown-header">Type your markdown to the left field.</h1>
                </header>
                <section className="markdown-field markdown-field-left">
                    <Input onInputChange={this.changeOutput} />
                </section>
                <section className="markdown-field markdown-field-right">
                    <Output text={this.state.text} />
                </section>
            </div>
        );
    }

    changeOutput(value) {
        this.setState({
            text: value
        });
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));