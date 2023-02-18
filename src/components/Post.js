import React from 'react';

const Post = ({ post }) => {
    // console.log(post)
    return (
        <div className='blogCard'>
            <h4>{post.title}</h4>
            <p>{post.contents}</p>
            <br></br>
            <p>{post.category}</p>


        </div>
    )
}

export default Post;