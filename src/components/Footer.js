import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Project made alongside with Traversy Media</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
