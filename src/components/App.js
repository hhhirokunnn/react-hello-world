import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from './EventForm.js'
import reducer from '../reducers'
import Events from './Events'

const App = () => {
  // refs: https://ja.reactjs.org/docs/hooks-reference.html#usereducer
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <div className= "container-fluid">
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
