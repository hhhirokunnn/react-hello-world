import React, { useState, useContext } from 'react'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
        // ボタン押下時のsubmitを動作させない。
        // reloadを防ぐことができる。
        e.preventDefault()
        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })

        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'Created Event',
            operatedAt: timeCurrentIso8601()
        })

        //formに残っている値をclearする
        setTitle('')
        setBody('')
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('You want to delete all events?')
        if(result) {
            dispatch({ type: DELETE_ALL_EVENTS})

            dispatch({
                type: ADD_OPERATION_LOG,
                description: 'Deleted All Events',
                operatedAt: timeCurrentIso8601()
            })
        }
    }

    const deleteAllOperationLogs = e => {
        e.preventDefault()
        const result = window.confirm('You want to delete all operationLogs?')
        if(result) {
            dispatch({ type: DELETE_ALL_OPERATION_LOGS})
        }
    }

    const unCreatable = title === '' || body === ''

    return (
        <>
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
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}> Delete All Events</button>
                
                <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}> Delete All OperationLogs</button>
            </form>
        </>
    )
}

export default EventForm
