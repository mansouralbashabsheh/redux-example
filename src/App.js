import React, { Component } from 'react';
import {connect}from 'react-redux'
import './App.css';

class App extends Component {
   state = { 
    count : 0
  }

 increase = ( ) =>{
    this.setState({
      count:this.state.count+1
    })

  }

  
decrease = ( ) =>{
    this.setState({count:this.state.count+1})

  }
  render() {
   console.log(this.props)
    return (
      <div className="App">
   <div class="container-buttons">

 <h1> Increase & Decrease using Redux </h1>
  <button className="btn" onClick={this.props.increase}> +</button>
   <div className="result"> {this.props.count}</div>
      
  <button className="btn" onClick={this.props.decrease}> -</button>
  </div>
     </div>
    );
  }



}

function mapStateToProps (state){
   return {
     count:state.count
   } 
}

const action1 ={
  type:'INCREASE'
}

const action2 ={
  type:'DECREASE'
}
function mapDispatchToProps (dispatch){
  return {
    increase : () => dispatch(action1),
    decrease : () => dispatch(action2)
  }

}
export default connect(mapStateToProps , mapDispatchToProps)(App);
