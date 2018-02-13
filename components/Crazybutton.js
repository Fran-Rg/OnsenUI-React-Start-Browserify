import React from 'react';

import ons from 'onsenui';

import {
  Button
} from 'react-onsenui';

class CrazyButton extends React.Component {
  constructor() {
    super();
    this.state = {counter:0};
  };

  handleClick = () => {
    var counter = this.state.counter + 1;
    this.setState({counter:counter});
    ons.notification.alert('Hello world!');
  };

  render() {
    return (
        <Button onClick={this.handleClick}>{this.props.text} + Tap me! ({this.state.counter} times)</Button>
    );
  };
};

module.exports = CrazyButton;
