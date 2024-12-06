import React, { useContext } from 'react'
import { DataContext } from '../../context/ApiContext'
import Task from '../task/Task'
import './tasks.css'

const Tasks = () => {
    const { task } = useContext( DataContext )
    return (
        <div className='tasks'>
            {
                task.map( ( e, i ) => {
                    return <Task key={i} obj={e} />
                } )
            }
        </div>
    )
}

export default Tasks