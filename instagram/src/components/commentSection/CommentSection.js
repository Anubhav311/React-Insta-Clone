import React from 'react';

import './commentSection.css';

const CommentSection = (props) => {
    
    return <div className="commentSection">{props.comments.map((comment, index) => (
            <div className="comment" key={index}>
                <p className="comment-username">{comment.username}</p>
                <p className="comment-text">{comment.text}</p>
            </div>
        ))}
        <form className="inputForm" onSubmit={props.addComment} id={props.id}>
            <input 
                className="comment-input" 
                placeholder="Add a comment..." 
                onChange={props.handleChanges}
                type="text"
            />
        </form>
    </div>
}

const changeSomething = (event) => {
    event.preventDefault();
    alert('Hi');
}

export default CommentSection;