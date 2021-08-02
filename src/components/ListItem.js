import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'


export const ListItem = () => {

    const { state } = useContext(ItemsContext)
   
    const items = state

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
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td>{item}</td>
                            <td><button className="btn btn-primary">Seleccionar</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
         </table>
        </div>
    )
}
