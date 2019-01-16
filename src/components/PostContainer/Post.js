import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <>
            <div className='postContainerHeader' >
                <div className="image-cropper" >
                    <img className='postThumbnail' src={props.data.thumbnailUrl} alt={`${props.data.username}`}/>
                </div>
                <h2 className='postHeader'>{props.data.username}</h2>
            </div>
            <div>
                <img className='postMainImage' src={props.data.imageUrl} alt={`${props.data.username}`} />
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