import React from 'react';

import Comment from './Comment'
import CommentIcons from './CommentIcons';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import CommentInput from './CommentInput';

import './Comment.css'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const CommentContainer = (props) => {
    return (
        <div className='commentContainer'>
            <CommentIcons />
            <h3 className='commentLikes'>{props.data.likes} likes</h3>
            {props.data.comments.map((e, i) => {
                return (
                    <Comment comment={e} key={Date.now() + i} />
                )
            })}
            <p>{timeAgo.format(Date.now() - 2 * 60 * 60 * 1000)}</p>
            <CommentInput />
        </div>
    )
}

export default CommentContainer;