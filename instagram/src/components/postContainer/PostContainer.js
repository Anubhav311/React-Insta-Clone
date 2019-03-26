import React from 'react';

import CommentSection from '../commentSection/CommentSection';
import './postContainer.css'

const PostContainer = (props) => {
    console.log(props);
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
                <i className="far fa-heart fa-lg icon"></i>
                <i className="far fa-comment fa-lg icon"></i>
                <p className="likes">{post.likes} likes</p>
            </div>
            <div>
                <CommentSection comments={post.comments}/>
            </div>
        </div>
        )
    )}</div>
}

export default PostContainer;