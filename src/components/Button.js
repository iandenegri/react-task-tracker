import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const onClick = function(e){
        console.log(e)
        console.log('Clicked')
        return 'Clicked'
    }
    return (
        <button 
            onClick={onClick}
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
