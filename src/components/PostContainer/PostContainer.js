import React from 'react';

import Post from './Post';
import CommentContainer from '../CommentSection/CommentContainer';

import './Post.css'

const PostContainer = (props) => {
    return (
        <div className='postContainerPost'>
            {props.data.map((e, i) => {
                return (
                    <div>
                        <Post data={e} key={Date.now() + i}/>
                        <CommentContainer data={e} key={Date.now() + i}/>
                    </div>
                )
            })}
        </div>
    )
}

export default PostContainer;