import React from 'react';
import PropTypes from 'prop-types';
import ids from 'short-id';

import Post from './Post';
import CommentContainer from '../CommentSection/CommentContainer';

import './Post.css'

import { PostHolder } from './PostStyles';

const PostContainer = (props) => {
    return (
        <PostHolder key={ids.generate()}>
            {props.data.map((e, i) => {
                return (
                    <div key={ids.generate()}>
                        <Post data={e} key={ids.generate()} />
                        <CommentContainer handleChanges={props.handleChanges}  commentInput={props.commentInput} data={e} key={ids.generate()}  />
                    </div>
                )
            })}
        </PostHolder>
    )
}

PostContainer.propTypes = {
    data: PropTypes.array,
    commentInput: PropTypes.string
}

export default PostContainer;