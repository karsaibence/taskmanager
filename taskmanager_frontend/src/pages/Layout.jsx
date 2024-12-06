import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './nav.css'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Feladatok</Link>
                    </li>
                    <li>
                        <Link to="/new_task">Új feladat</Link>
                    </li>
                    <li>
                        <Link to="/users">Felhasználók</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout
