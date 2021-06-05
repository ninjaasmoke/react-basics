import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h1>React Basics</h1>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
            </ul>
        </nav>
    )
}
