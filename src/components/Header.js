import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const location = useLocation();

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' && <Button 
            color={props.showForm ? 'red' : 'green' } 
            text={props.showForm ? 'Close' : 'Add' } 
            setShowForm={props.setShowForm}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker!',
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header
