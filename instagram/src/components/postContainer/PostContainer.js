import React from 'react';

import CommentSection from '../commentSection/CommentSection';
import './postContainer.css'

const PostContainer = (props) => {
    return    <div>{props.dummyData.map((post, index) => (
        <div className="postContainer" key={index}>
            <div className="user">
                <img src={post.thumbnailUrl} className="thumbnail" alt="post-icon"/>
                <p className="username">{post.username}</p>
            </div>
            <div className="post-image-container">
                <img src={post.imageUrl} className="post-image" alt="post-visuals"/>
            </div>
            <div className="post-icons">
                <i className="far fa-heart fa-lg icon" onClick={props.incrementLikes} id={index}></i>
                <i className="far fa-comment fa-lg icon"></i>
                <p className="likes">{post.likes} likes</p>
            </div>
            <div id={index}>
                <CommentSection id={post.id} comments={post.comments} addComment={props.addComment} handleChanges={props.handleChanges}/>
            </div>
        </div>
        ) 
    )}</div>
}

const Conditional = (props) => {
    if(true) {
    return <PostContainer 
    dummyData={props.dummyData} 
    incrementLikes={props.incrementLikes} 
    addComment={props.addComment}
    handleChanges={props.handleChanges}
    />
    } else {
        return <h1>eat my poop</h1>
    }
}

export default Conditional;