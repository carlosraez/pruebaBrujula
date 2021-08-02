import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'
import Swal from 'sweetalert2'
import './form.css'

export const FormItems = () => {

    const { state , setState } = useContext(ItemsContext)

        let listActual = state.list
        let selected = state.listSelected
        let prev = state.prevSta
    
    const handleAdd = () => {
  
      let textAdd =  prompt('Escribe una cadena de texto')
     
     if (textAdd == null || textAdd === "") {
        Swal.fire('Por favor escribe algo válido')
      }
      else {
        let newList = [...(listActual || []), `${textAdd}`]
        let previousList = [...(listActual || [])]

        setState({
            ...state,
            list: newList, 
            prevSta: previousList
        })
      }
    
    }

    const handleDeleteSelection = () => {
        let result = [...(state.list || [])].filter((a, i) => !selected.includes(i))
        let previousList = [...(state.list || [])]
       
        setState({
            list: result,
            listSelected:[],
            prevSta: previousList,   
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
