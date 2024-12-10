import React, { useContext } from 'react'
import './task.css'
import { DataContext } from '../../context/ApiContext'

const Task = ( props ) => {
    const { deleteResource } = useContext( DataContext )

    // function modositClick() {
        
    //     //putTask( props.obj, props.obj.id )
    // }

    return (
        <div className='task'>
            <h2>{props.obj.title}</h2>
            <p>{props.obj.description}</p>
            <div className='adatok'>
                <div className='tároló'>{props.obj.end_date}</div>
                <div className='tároló'>{props.obj.user_id}</div>
                <div className='tároló'>{props.obj.status}</div>
            </div>
            <div className='gombok'>
                <button className='mod' onClick={() => { props.modositClick( props.obj.id ) }}>Módosítás</button>
                <button className='del' onClick={() => { deleteResource( props.obj.id ) }}>Törlés</button>
            </div>
        </div>
    )
}

export default Task