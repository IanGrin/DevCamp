import React, { Component } from 'react';
import { footer } from 'iangrin-js-footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        { footer('IanGrin') }
      </div>
    );
  }
}
