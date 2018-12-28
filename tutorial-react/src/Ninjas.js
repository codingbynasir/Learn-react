import React, { Component } from 'react';
class Ninjas extends Component{
    render(){
        //console.log(this.props);
        const{name, age, belt}=this.props
        return(
            <div className="ninja">
                <div>Name: Nasir</div>
                <div>Age: 23</div>
                <div>Belt: Black 0xDC</div>
                <hr/>
                
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: {belt}</div>
                <hr/>
                <div>Name: { this.props.name }</div>
                <div>Age: { this.props.age }</div>
                <div>Belt: {this.props.belt}</div>
            </div>
        );
    }
}
export default Ninjas