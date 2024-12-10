import React, { useContext, useState } from 'react'
import { DataContext } from '../../context/ApiContext'
import Task from '../task/Task'
import './tasks.css'

const Tasks = () => {
    const today = new Date().toISOString().split( 'T' )[ 0 ];
    const { user, task, putTask } = useContext( DataContext );
    const [ cim, setCim ] = useState( "" );
    const [ leiras, setLeiras ] = useState( "" );
    const [ status, setStatus ] = useState();
    const [ hatarido, setHatarido ] = useState( today );
    const [ felhasznalo, SetFelhasznalo ] = useState();

    function modositClick( id ) {
        let modID;
        task.forEach( e => {
            if ( e.id === id ) {
                modID = {
                    id: id,
                    title: cim,
                    description: leiras,
                    end_date: hatarido,
                    user_id: userIDKeres(),
                    status: status
                }
            }
        } );
        putTask( modID, modID.id )
    }

    function userIDKeres() {
        let id = -1;
        user.forEach( e => {
            if ( e.name === felhasznalo ) {
                id = e.user_id
            }
        } );
        console.log( id )
        return id
    }

    const handleChange = ( event ) => {
        setStatus( event.target.value )
    }

    const handleUserChange = ( event ) => {
        SetFelhasznalo( event.target.value )
    }



    return (
        <div>
            <div className='modosit'>
                <form>
                    <label>Cím:
                        <input
                            type="text"
                            value={cim}
                            onChange={( e ) => setCim( e.target.value )}
                        />
                    </label>
                    <label>leírás:
                        <input
                            type="text"
                            value={leiras}
                            onChange={( e ) => setLeiras( e.target.value )}
                        />
                    </label>
                    <label>Status:
                        <select value={status} onChange={handleChange}>
                            <option value="Lezárt">Lezárt</option>
                            <option value="Folyamatban">Folyamatban</option>
                            <option value="Tesztelés">Tesztelés</option>
                        </select>
                    </label>
                    <label>Határidő:
                        <input
                            type="date"
                            value={hatarido}
                            onChange={( e ) => setHatarido( e.target.value )}
                        />
                    </label>

                    <label>A feladatot elvégzi:
                        <select value="" onChange={handleUserChange}>
                            {
                                user.map( ( e, i ) => {
                                    return <option key={i} value={e.name}>{e.name}</option>
                                } )
                            }
                        </select>
                    </label>
                </form>
            </div>
            <div className='tasks'>
                {
                    task.map( ( e, i ) => {
                        return <Task key={i} obj={e} modositClick={modositClick} />
                    } )
                }
            </div>
        </div>
    )
}

export default Tasks