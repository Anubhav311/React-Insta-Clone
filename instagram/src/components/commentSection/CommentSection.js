import React from 'react';
import styled, { css } from 'styled-components';


const CommentSectionDiv = styled.div`
    margin: 10px;
`

const CommentDiv = styled.div`
    display: flex;
`

const CommentUsernameP = styled.p`
    margin: 0;
    margin-bottom: 5px;
    margin-right: 10px;
    font-weight: 600;
`
const CommentTextP = styled.p`
    margin: 0;
`

const InputForm = styled.form`
    border-top: 1px solid lightgray;
    padding-top: 10px;
    margin-top: 10px;
`

const CommentInput = styled.input`
    margin: 0;
    width: 98%;
    text-align: left;
    background-color: white;
    border: none;
    ::placeholder {
        font-weight: bold;
        color: lightgray;
    }
`

const CommentSection = (props) => {
    
    return <CommentSectionDiv className="commentSection">{props.comments.map((comment, index) => (
            <CommentDiv className="comment" key={index}>
                <CommentUsernameP className="comment-username">{comment.username}</CommentUsernameP>
                <CommentTextP className="comment-text">{comment.text}</CommentTextP>
            </CommentDiv>
        ))}
        <InputForm className="inputForm" onSubmit={props.addComment} id={props.id}>
            <CommentInput 
                className="comment-input" 
                placeholder="Add a comment..." 
                onChange={props.handleChanges}
                type="text" 
            />
        </InputForm>
    </CommentSectionDiv>
} 



export default CommentSection;