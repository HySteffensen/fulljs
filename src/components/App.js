import React from 'react';
import Header from './Header';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  };
  componentDidMount() {
    // timers, listeners
    console.log('did mount');
  }
  componentWillUnmount() {
    // clean timers, listeners
    console.log('will Unmount');
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
      </div>
    );
  }
}

export default App;
