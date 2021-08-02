import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'


export const ListItem = () => {

    const { state } = useContext(ItemsContext)
   
    const items = state.list

    const handleSelection = (i) => {
        alert('me has pulasdo y soy el ' + i)
    }

    return (
        <div>
            <table className="table">
                 <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Cadena de Texto</th>
                    <th scope="col">Seleccionar</th>
                    </tr>
                 </thead>
            <tbody>
            {
                items.map( (item,i) => {
                    return (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td >{item}</td>
                            <td><button className="btn btn-primary" onClick={ (index) => handleSelection}>Seleccionar</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
         </table>
        </div>
    )
}
