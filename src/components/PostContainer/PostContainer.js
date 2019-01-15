import React from 'react';
import PropTypes from 'prop-types';
 
import Post from './Post';
import CommentContainer from '../CommentSection/CommentContainer';
import CommentInput from '../CommentSection/CommentInput';
import './Post.css'

const PostContainer = (props) => {
    return (
        <div className='postContainerPost' key={Date.now()}>
            {props.data.map((e, i) => {
                return (
                    <div>
                        <Post data={e} key={Date.now()+i} />
                        <CommentContainer handleChanges={props.handleChanges}  commentInput={props.commentInput} data={e} key={e+i}  />
                    </div>
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.array,
    commentInput: PropTypes.string
}

export default PostContainer;