import React, { useContext } from 'react'
import { DataContext } from '../../context/ApiContext'
import User from '../user/User'
import "./users.css"

const Users = () => {
    const { user } = useContext( DataContext )
    return (
        <table>
            <thead>
                <tr>
                    <th>User id</th>
                    <th>User név</th>
                </tr>
            </thead>
            <tbody>
                {user.map( ( e, i ) => {
                    return <User key={i} id={e.user_id} name={e.name} />
                } )}
            </tbody>
        </table>


    )
}

export default Users