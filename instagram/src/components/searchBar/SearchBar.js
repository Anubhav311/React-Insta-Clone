import React from 'react';
import styled, { css } from 'styled-components';

import './searchBar.css'; 

const SearchBarDiv = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    height: 80px;
    justify-content: space-between;
    padding: 20px;
    padding-left: 190px;
    padding-right: 190px;
    box-sizing: border-box;
    background-color: white;
`

const LogoDiv = styled.div`
    display: flex;
    align-items: center;
`

const ImageContainerDiv = styled.div`
    width: 120px;
    border-left: 1px gray solid;
    padding-left: 20px;
    margin-left: 20px;
    height: 30px;
`

const ImageElement = styled.img`
    width: 100%;
`

const SearchElement = styled.input`
    margin-left: -110px;
    border: 1px solid lightgray;
    border-radius: 3px;
    background-color: #FAFAFA;
    text-align: center;
    padding: 5px;
    width: 200px;
`

const LogoutPTag = styled.p`
    font-size: 0.7rem;
    margin-left: -250px;
    font-weight: bold;
    color: white;
    cursor: pointer;

    &:hover {
        color: gray;
    }
`

const IconsDiv = styled.div`
    width: 120px;
    display: flex;
    justify-content: space-between;
`

const SearchBar = (props) => {
    return ( 
        <SearchBarDiv>
            <LogoDiv>
                <i className="fab fa-instagram fa-2x"></i>
                <ImageContainerDiv className="image-container">
                    <ImageElement src={require("../../assets/instagram.jpg")} alt="header_image" className="name-image"/>
                </ImageContainerDiv>
            </LogoDiv>
            <form onSubmit={props.noReload}>
                <SearchElement 
                    className="search-input"
                    type="text" 
                    placeholder="Search"
                    value={props.username}
                    onChange={props.saveSearchValue}
                />
            </form>
            <IconsDiv className="icons">
                <i className="far fa-compass fa-lg"></i>
                <i className="far fa-heart fa-lg"></i>
                <i className="far fa-user fa-lg"></i>
            </IconsDiv>
            <LogoutPTag className="logOut" onClick={props.logOut}>Log <br/>Out</LogoutPTag>
        </SearchBarDiv>
    )
}

export default SearchBar;