import React, { Component } from 'react';
class Send_data extends Component{
    render(){
        const { ninjas }=this.props;
        const ninjaList=ninjas.map(ninja=>{
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>ID: {ninja.id}</div>
                    <hr/>
                </div>
                )
        });
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        );
    }
}
export default Send_data