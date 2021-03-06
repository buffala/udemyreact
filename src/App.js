import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: {firstName: 'George', lastName: 'Brown'}, 
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name.firstName}</p>
         <button onClick={() => {
          this.setState({name: {firstName: 'Simon'}});
         }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
