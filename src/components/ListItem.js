import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'

export const ListItem = () => {

    const { state, setState} = useContext(ItemsContext)
   
    const items  = state.list
    const selec  = state.listSelected
    
    const handleSelection = (index) => {
       
        let isSelected = selec.includes(index)
        console.log(isSelected);

        if(isSelected) {
            let res = selec.filter((a)=> a !== index)
    
            setState({
                ...state,
                listSelected: res,
               
             })
             console.log(state);
        }

        else {
            let res = selec || []
            res.push(index)
            setState({
                ...state,
                listSelected: res,

             })
        }
    }

    const handleTrClick = (indexActual) => {

        let res  = items.filter((a, index) =>  { return  items[index] !== items[indexActual] })
        setState({
            ...state,
            list: res,

         })
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
                    let clss = selec.includes(index) ? 'alert alert-info' : ''
                    let textButton = selec.includes(index) ? 'Seleccionado' : 'Seleccionar'
                    return (
                        <tr key={index} onDoubleClick={() => handleTrClick(index)} className={clss} >
                            <th scope="row">{index + 1}</th>
                            <td >{item}</td>
                            <td><button className="btn btn-primary" onClick={ () => handleSelection(index)}>{textButton}</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
         </table>
        </div>
    )
}
