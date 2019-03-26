import React from 'react';

const PostContainer = (props) => {
    return 
        {props.dummyData.map(post => (
            <div className="postContainer">
                <div>
                    <img src={post.thumbnailUrl} className="thumbnail"/>
                    <p className="username"></p>
                </div>
                <div>
                    <img src="" className="post-image"/>
                </div>
                <div>
                <i className="far fa-heart fa-lg"></i>
                <i class="far fa-comment"></i>
                </div>
            </div>
            )
        )}

}

export default PostContainer;