import React, { useContext } from 'react'
import { DataContext } from '../../context/ApiContext'
import User from '../user/User'

const Users = () => {
    const { user } = useContext( DataContext )
    return (
        <table>
            <tr>
                <th>User id</th>
                <th>User név</th>
            </tr>
            {user.map( ( e, i ) => {
                return <User key={i} id={e.user_id} name={e.name} />
            } )}
        </table>


    )
}

export default Users