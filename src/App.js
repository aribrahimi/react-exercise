import React from 'react';



import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {name:'David'}
  }
  render(){
    setTimeout(() => {
      this.setState({name:"Bab"})
    }, 1000);

    return (
        <div>
          {this.state.name}
        </div>
    )
  }
}




export default App;
