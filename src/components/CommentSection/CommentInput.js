import React from 'react';

const CommentInput = (props) => {
    return (
        <div className='commentInput--container'>
            <form onSubmit={props.addComment}>
            <input  name='comment'  type='text' placeholder='Add a comment...' value={props.comment} onChange={props.handleChanges}/> 
            </form>
            <i className="fas fa-ellipsis-h"></i>
        </div>
    )
}

export default CommentInput;