import React, { useState, useReducer } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css'
 import reducer from '../reducers'

const App = () => {
  // refs: https://ja.reactjs.org/docs/hooks-reference.html#usereducer
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const addEvent = e => {
    // ボタン押下時のreloadを防ぐ
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

  console.log({state})
  console.log({...state})

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

        <button className="btn btn-primary" onClick={addEvent}> Create Event</button>
        <button className="btn btn-danger"> Delete Event</button>
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
        <tbody></tbody>
      </table>
    </div>
  )
}

export default App
