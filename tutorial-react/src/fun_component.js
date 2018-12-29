import React from 'react';
const FunctionalNinja = ({ninjas}) => {
        const ninjaList=ninjas.map(ninja=>{
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>ID: {ninja.id}</div>
                    <hr/>
                </div>
                )
        })
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
}
export default FunctionalNinja