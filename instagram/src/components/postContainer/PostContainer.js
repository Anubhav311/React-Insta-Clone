import React from 'react';
import styled, { css } from 'styled-components';

import CommentSection from '../commentSection/CommentSection';
import './postContainer.css'


const PostContainerDiv = styled.div`
    background-color: white;
    width: 50%;
    margin: 50px auto 50px auto;   
    border: 1px solid lightgray;
    border-radius: 3px;
`

const UserDiv = styled.div`
    display: flex;
    align-items: center;
`

const ThumbnailImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 15px;
`

const UsernamP = styled.p`
    font-weight: bold;
`

const PostImageImg = styled.img`
    width: 100%;
`

const LikesP = styled.p`
    margin: 0px 10px;
    font-weight: 500;
`


const PostContainer = (props) => {
    return    <div>{props.dummyData.map((post, index) => (
        <PostContainerDiv key={index}>
            <UserDiv>
                <ThumbnailImg src={post.thumbnailUrl} alt="post-icon"/>
                <UsernamP>{post.username}</UsernamP>
            </UserDiv>
            <div>
                <PostImageImg src={post.imageUrl} className="post-image" alt="post-visuals"/>
            </div>
            <div>
                <i className="far fa-heart fa-lg icon" onClick={props.incrementLikes} id={index}></i>
                <i className="far fa-comment fa-lg icon"></i>
                <LikesP>{post.likes} likes</LikesP>
            </div>
            <div id={index}>
                <CommentSection id={post.id} comments={post.comments} addComment={props.addComment} handleChanges={props.handleChanges}/>
            </div>
        </PostContainerDiv>
        ) 
    )}</div> 
}



export default PostContainer;