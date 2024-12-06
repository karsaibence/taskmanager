import React from 'react'

const User = ( props ) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
        </tr>
    )
}

export default User