import React, { useState } from 'react'
import { FormItems } from './components/FormItems'
import { ListItem } from './components/ListItem'
import { ItemsContext } from './components/ItemsContext'

export const App = () => {

  const [state, setState] = useState({
      list:[]
  })

 

  return (
  <ItemsContext.Provider value={{
    state, setState
  }} >
      <div className="container">
        <h1>Agrega Items a tu lista</h1>
        <div className="row">
          <div className="col-8">
              <ListItem />
          </div>
          <div className="col-4">
              <FormItems />
          </div>
        </div>
      </div>
  </ItemsContext.Provider>
  )
}

