import React from 'react';

import Comment from './Comment'
import CommentIcons from './CommentIcons';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import CommentInput from './CommentInput';

import PropTypes from 'prop-types';
 
import './Comment.css'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

class CommentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.data.comments,
            comment: '',
            likes: props.data.likes
        }
    }

    handleChanges = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    }

    addComment = (ev) => {
        ev.preventDefault()
        this.setState({
            comments: [...this.state.comments, {username: 'leianne', text: this.state.comment}],
            comment: ''
        })
    }

    addLike = () => {
        this.setState({
            likes: ++this.state.likes
        })
    }

    render() {
        return (
            <div className='commentContainer' >
                <CommentIcons addLike={this.addLike}/>
                <h3 className='commentLikes'>{this.state.likes} likes</h3>
                {this.state.comments.map((e, i) => {
                    return (
                        <Comment comment={e} key={e + i} />
                    )
                })}
                <p>{timeAgo.format(Date.now() - 2 * 60 * 60 * 1000) }</p>
                <CommentInput addComment={this.addComment} comment={this.state.comment} handleChanges={this.handleChanges} />
            </div>
        )
    }
}

CommentContainer.propTypes = {
    data: PropTypes.shape({
        comments: PropTypes.array,
        likes: PropTypes.number
    })
} 

export default CommentContainer;