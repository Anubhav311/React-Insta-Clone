import React from 'react';

const WithAuthentica = FirstComponent => SecondComponent => props => {
    if(props.login) {
        return <FirstComponent 
        dummyData={props.dummyData} 
        incrementLikes={props.incrementLikes} 
        addComment={props.addComment}
        handleChanges={props.handleChanges}
        />
    } else if (!props.login) {
        return <SecondComponent 
            usernameValue={props.usernameValue}
            passwordValue={props.passwordValue}
            checkLogin={props.checkLogin}
        />
    }
}

export default WithAuthentica;
