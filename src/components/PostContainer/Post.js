import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className='postContainerHeader'>
                <div class="image-cropper">
                    <img className='postThumbnail' src={props.data.thumbnailUrl}/>
                </div>
                <h2 className='postHeader'>{props.data.username}</h2>
            </div>
            <div>
                <img className='postMainImage' src={props.data.imageUrl}/>
            </div>
        </div>
    )
}

export default Post;