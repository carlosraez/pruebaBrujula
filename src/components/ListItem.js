import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'


export const ListItem = () => {

    const { state, setState } = useContext(ItemsContext)
   
    const items  = state.list
    
    const handleSelection = (index) => {
       const newSelec =  state.listSelected.push(index)
       setState({
          listSelected:newSelec,
          ...state
       })
  
    }

    const handleTrClick = (index) => {
        let actual = items[index]
        
        
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
                items.map( (item,index) => {
                    
                    return (
                        <tr key={index} onClick={() => handleTrClick(index)}>
                            <th scope="row">{index + 1}</th>
                            <td >{item}</td>
                            <td><button className="btn btn-primary" onClick={ () => handleSelection(index)}>Seleccionar</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
         </table>
        </div>
    )
}
