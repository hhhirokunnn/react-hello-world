import React, { useContext } from 'react'
import { 
  DELETE_EVENT,
  ADD_OPERATION_LOG
 } from '../actions'

import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = ({ event }) => {
    const id = event.id
    const { dispatch } = useContext(AppContext)

    const handleClickDeleteButton = () =>{
      const result = window.confirm(`You want to delete event(id=${id})?`)
      if(result) { 
        dispatch({ type: DELETE_EVENT, id })

        dispatch({ 
          type: ADD_OPERATION_LOG,
          description: `Deleted Event(id=${id})`,
          operatedAt: timeCurrentIso8601()
         })
      }
    }
    
    return (
      <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>Delete</button></td>
      </tr>
    )
}

export default Event
