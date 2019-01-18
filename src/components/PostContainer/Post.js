import React from 'react';
import PropTypes from 'prop-types';

import { PostHeaderContainer, ImageCropper, PostThumbnail, PostHeader, PostImage } from './PostStyles';

const Post = (props) => {
    return (
        <>
            <PostHeaderContainer>
                <ImageCropper>
                    <PostThumbnail src={props.data.thumbnailUrl} alt={`${props.data.username}`}/>
                </ImageCropper>
                <PostHeader>{props.data.username}</PostHeader>
            </PostHeaderContainer>
            <div>
                <PostImage src={props.data.imageUrl} alt={`${props.data.username}`} />
            </div>
        </>
    )
}

Post.propTypes ={
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string
    })
}

export default Post;