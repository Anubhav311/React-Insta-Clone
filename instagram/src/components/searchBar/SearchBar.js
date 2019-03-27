import React from 'react';

import './searchBar.css';

const SearchBar = (props) => {
    return ( 
        <div className="searchBar">
            <div className="logos">
                <i className="fab fa-instagram fa-2x"></i>
                <div className="image-container">
                    <img src={require("../../assets/instagram.jpg")} alt="header_image" className="name-image"/>
                </div>
            </div>
            <form onSubmit={props.noReload}>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={props.username}
                    onChange={props.saveSearchValue}
                />
            </form>
            <div className="icons">
                <i className="far fa-compass fa-lg"></i>
                <i className="far fa-heart fa-lg"></i>
                <i className="far fa-user fa-lg"></i>
            </div>
        </div>
    )
}

export default SearchBar;