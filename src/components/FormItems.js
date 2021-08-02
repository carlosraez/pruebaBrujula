import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'

export const FormItems = () => {

    const { state , setState } = useContext(ItemsContext)

        let listActual = state.list
        let selected = state.listSelected
        let prev = state.prevSta
    
    const handleAdd = () => {
        
      console.log(listActual);

     let textAdd =   prompt('Escribe una cadena de texto')
     
  
     if (textAdd == null || textAdd === "") {
        alert('Por favor escribe algo válido')
      }
      else {
        let newList = listActual
        newList.push(`${textAdd}`)
        setState({
            ...state,
            list: newList, 
        })
      }
    
    }

    const handleDeleteSelection = () => {
        
        let result = listActual.filter((a, i) => !selected.includes(i))
       
        setState({
            list: result,
            listSelected:[],
            prevSta: listActual,   
        })
    }

    const handleUndo = () => {
        let prevState = prev

        setState({
            ...state,
            list: prevState,  
        })   
    }

    return (
        <div className="card card-form">
           <h5 className="card-title">Acciones</h5>
                <p className="card-text">En esta seccion usted puede: agregar, quitar y deshacer</p>
                <div className="d-grid gap-3">
                    <button className="btn btn-outline-primary btn-sm" onClick={handleAdd}>+</button>
                    <button className="btn btn-outline-primary btn-sm" onClick={handleDeleteSelection}>-</button>
                    <button className="btn btn-outline-primary btn-sm" onClick={handleUndo}>Deshacer</button>
                </div>
        </div>
    )
}
