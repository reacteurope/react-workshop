import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import withMinLengthValidation from './withMinLengthValidation';

const TextInput = (props) => (
  <input type="text" {...props} />
)

const NumberInput = (props) => (
  <input type="number" {...props} />
)

const TextInputWithValidation = withMinLengthValidation(TextInput, 4)
const NumberInputWithValidation = withMinLengthValidation(NumberInput, 3)

class App extends Component {
  state = {
    text: '',
    number: 42,
  }

  updateText = (evt) => { this.setState({ text: evt.target.value }) }

  updateNumber = (evt) => { this.setState({ number: evt.target.value }) }

  render() {
    return (
      <div>
        <TextInputWithValidation
          value={this.state.text}
          onChange={this.updateText}
        />
        <NumberInputWithValidation
          value={this.state.number}
          onChange={this.updateNumber}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
