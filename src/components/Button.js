import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    return (
        <button 
            onClick={props.setShowForm}
            className='btn' 
            style={{backgroundColor: props.color }}
        >{props.text}</button>
    )
}

Button.defaultProps = {
    color: 'green',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
