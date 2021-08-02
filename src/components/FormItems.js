import React, { useContext } from 'react'
import { ItemsContext } from './ItemsContext'


export const FormItems = () => {

    const { state , setState } = useContext(ItemsContext)
    console.log(state);

    const handleAdd = () => {
     const textAdd =   prompt('Escribe una cadena de texto')
     if (textAdd.length > 0) {
        let newList = state.list
        newList.push(`${textAdd}`)
        setState({
            list: newList
        })
      }
    }

    const handleDelete = () => {
        //borrar seleccionados
    }

    const handleUndo = () => {

    }


    return (
        <div className="card">
           <h5 className="card-title">Acciones</h5>
                <p className="card-text">En esta seccion usted puede: agregar, quitar y deshacer</p>
                <div className="d-grid gap-3">
                    <button className="btn btn-outline-primary btn-sm" onClick={handleAdd}>+</button>
                    <button className="btn btn-outline-primary btn-sm" onClick={handleDelete}>-</button>
                    <button className="btn btn-outline-primary btn-sm" onClick={handleUndo}>Deshacer</button>
                </div>
        </div>
    )
}
