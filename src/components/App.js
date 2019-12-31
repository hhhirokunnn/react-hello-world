import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'
import Event from './Event'

const App = () => {
  // refs: https://ja.reactjs.org/docs/hooks-reference.html#usereducer
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const addEvent = e => {
    // ボタン押下時のsubmitを動作させない。
    // reloadを防ぐことができる。
    e.preventDefault()
    dispatch({
        type: 'CREATE_EVENT',
        title,
        body
      })

      //formに残っている値をclearする
      setTitle('')
      setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('You want to delete all events?')
    if(result) dispatch({ type: 'DELETE_ALL_EVENTS'})
  }

  const unCreatable = title === '' || body === ''

  return (
    <div className= "container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e=> setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}> Create Event</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}> Delete All Event</button>
      </form>
      <h4>Event List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index)  => <Event key={index} event={event} dispatch={dispatch} />) }
        </tbody>
      </table>
    </div>
  )
}

export default App
