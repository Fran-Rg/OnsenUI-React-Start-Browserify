import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {
  Page
} from 'react-onsenui';

import CrazyButton from './components/Crazybutton';

class App extends React.Component {
  render = () => {
    return (
      <Page>
        <CrazyButton text="You"></CrazyButton>
      </Page>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
