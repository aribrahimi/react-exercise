
import React from 'react';


class State extends React.Component{
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

  export default State;