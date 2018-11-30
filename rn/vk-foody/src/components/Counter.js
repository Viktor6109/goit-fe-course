/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  hendleIncrement = evt => {
    console.log('Increment button was clicked!', evt);
    console.log('this.props: ', this.props);
  };

  hendleDecrement = evt => {
    console.log('Decrement button was clicked!', evt);
    console.log('this.props: ', this.props);
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    return (
      <div>
        <span> {value} </span>{' '}
        <button onClick={this.hendleIncrement}> Increment by {step} </button>{' '}
        <button onClick={this.hendleDecrement}> Decrement by {step} </button>{' '}
      </div>
    );
  }
}
