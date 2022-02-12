import React from 'react';
import LayoutManager from './components/LayoutManager';

class App extends React.Component {
  state = {
      pathname: false,
  }
  toggle = () => {
        this.setState((prevState) => {
            return { pathname: !prevState.pathname }
        });
    };
  render() {
    
    return (
      <>
        <button onClick={this.toggle}>CHANGE</button>
        <LayoutManager pathname={ this.state.pathname}/>
      </>);
  }
  
  
}

export default App;
