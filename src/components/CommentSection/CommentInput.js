import React from 'react';

const CommentInput = () => {
    return (
        <div className='commentInput--container'>
            <input type='text' placeholder='Add a comment...'/>
            <i class="fas fa-ellipsis-h"></i>
        </div>
    )
}

export default CommentInput;