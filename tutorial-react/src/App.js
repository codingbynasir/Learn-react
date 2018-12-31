import React, { Component } from 'react';
import Ninjas from './Ninjas'
import Send_data from './NinjaSend'
import FunctionalNinja from './fun_component'
import Conditional from './condition'
import AddNinja from './AddNinja'
import DeleteNinja from './delete_ninja'
class App extends Component {
	state={
		ninjas: [
		{name: 'Nasir Khan', age:23, id:1},
		{name: 'Bappy Bhai', age:24, id:2},
		{name: 'Sajid Bhai', age:23, id:4}
		]
	}

  addNinja=(ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas: ninjas
      })
  }

  deleteNinja = (id) => {
    let ninjas=this.state.ninjas.filter(ninja=>{
      return ninja.id !== id
    });
    this.setState({
      ninjas:ninjas
    })
  }
  componentDidMount(){
    console.log('Component is mounted');
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
        <h4>Form</h4>
        <AddNinja addNinja={this.addNinja}/>
        <h4>Delete Ninja</h4>
        <DeleteNinja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
