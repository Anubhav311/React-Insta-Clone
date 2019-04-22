import React from 'react';
import styled, { css } from 'styled-components';


const LoginContainerDiv = styled.div`
    width: 30%;
    margin: auto;
    text-align: center;
    height: 445px;
    padding-right: 30px;
    margin-top: 100px;
`

const FormTag = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LoginInput = styled.input`
    width: 300px;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 3px;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
    color: black;
    ::placeholder {
        color: black;
        opacity: 0.5;
      }
`

const ButtonTag = styled.button`
    width: 200px;
    height: 25px;
    background-color: white;
    border: 1px solid lightblue;
    border-radius: 5px;
    margin-top: 20px;
`

const Login = (props) => {
    return <LoginContainerDiv>
        <h1>Log In</h1>
        <FormTag>
            <LoginInput className="login" placeholder="username" onChange={props.usernameValue}/>
            <LoginInput className="login" placeholder="password is 12345678" onChange={props.passwordValue}/>
            <ButtonTag onClick={props.checkLogin}>Log In</ButtonTag>
        </FormTag>
    </LoginContainerDiv>
}

export default Login; 