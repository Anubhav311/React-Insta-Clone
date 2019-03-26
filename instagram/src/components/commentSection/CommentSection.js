import React from 'react';

import './commentSection.css'

const CommentSection = (props) => {
    return <div className="commentSection">{props.comments.map((comment, index) => (
            <div className="comment" key={index}>
                <p className="comment-username">{comment.username}</p>
                <p className="comment-text">{comment.text}</p>
            </div>
        ))}
        <form className="inputForm">
            <input className="comment-input" placeholder="Add a comment..."/>
        </form>
    </div>
}

export default CommentSection;