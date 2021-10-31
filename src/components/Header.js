import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker</h1>
            <h2>{props.title}</h2>
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
