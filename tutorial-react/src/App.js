import React, { Component } from 'react';
import Ninjas from './Ninjas'
import Send_data from './NinjaSend'
import FunctionalNinja from './fun_component'
import Conditional from './condition'
import AddNinja from './AddNinja'
class App extends Component {
	state={
		ninjas: [
		{name: 'Nasir Khan', age:23, id:1},
		{name: 'Bappy Bhai', age:24, id:2},
		{name: 'Ratul Bhai', age:25, id:3},
		{name: 'Sajid Bhai', age:23, id:4}
		]
	}
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome :)</p>
        <Ninjas name="Kamal" age="25" belt="Black"/>
        <h4>Data was sent from app to NinjaSend</h4>
        <Send_data ninjas={this.state.ninjas} />
        <h4>Functional Component</h4>
        <FunctionalNinja ninjas={this.state.ninjas} />
        <h4>Conditional component</h4>
        <Conditional ninjas={this.state.ninjas} />
        <AddNinja />

      </div>
    );
  }
}

export default App;
