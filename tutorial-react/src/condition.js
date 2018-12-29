import React from 'react';
const Conditional = ({ninjas}) => {
        // const ninjaList=ninjas.map(ninja=>{
        //     if (ninja.age<24) {
        //         return (
        //         <div className="ninja" key={ninja.id}>
        //             <div>Name: {ninja.name}</div>
        //             <div>Age: {ninja.age}</div>
        //             <div>ID: {ninja.id}</div>
        //             <hr/>
        //         </div>
        //         )
        //     }else{
        //         return null
        //     }
        // })

        //Tarnery operator
        const ninjaList=ninjas.map(ninja=>{
            return ninja.age>23 ? (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>ID: {ninja.id}</div>
                    <hr/>
                </div>
                ):null;
        });
        return(
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
}
export default Conditional