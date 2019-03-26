import React from 'react';

const CommentSection = (props) => {
    return <div>{props.comments.map((comment, index) => (
            <div key={index}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
            </div>
        ))}
        <form>
            <input/>
        </form>
    </div>
}

export default CommentSection;