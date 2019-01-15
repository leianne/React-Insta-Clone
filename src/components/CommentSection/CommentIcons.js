import React from 'react';

const CommentIcons = (props) => {
    return (
        <div className='commentIcons'>
            <i onClick={props.addLike}className="far fa-heart"></i>
            <i className="far fa-comment"></i>
        </div>
    )
}

export default CommentIcons;