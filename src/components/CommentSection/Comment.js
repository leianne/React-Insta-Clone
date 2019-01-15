import React from 'react';
import PropTypes from 'prop-types';
 
const Comment = (props) => {

    return (
        <div className='comment'>
            <h4>{props.comment.username}</h4>
            <p>{props.comment.text}</p>
        </div>
    )
    
}

export default Comment;