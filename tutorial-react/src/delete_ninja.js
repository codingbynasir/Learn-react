import React from 'react';
const DeleteNinja = ({ninjas, deleteNinja}) =>{
    
        const ninjaList=ninjas.map(ninja=>{
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>ID: {ninja.id}</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
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
export default DeleteNinja