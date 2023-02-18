import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBlogs } from '../features/blogsSlice';
import Post from './Post';
import AddBlogForm from './AddBlogForm';
import SearchForm from './SearchForm';

const BlogPost = () => {
    const blogs = useSelector(state => state.blogs.blogPosts);
    // console.log(blogs);

    const dispatch = useDispatch();

    const fetchBlogsToState = async () => {
        console.log("fetching blog post")

        await fetch("/allPosts")
            .then(response => response.json())
            .then(json => dispatch(setBlogs(json)));

    }

    useEffect(() => {
        fetchBlogsToState();
    }, [])

    return (
        <div className='body'>
            <SearchForm />
            <h1>Blogs</h1>
            {blogs.map(blog =>
                <Post post={blog} key={blog.id} fetchBlogsToState={fetchBlogsToState} />
            )}
            <AddBlogForm />
        </div>
    )
}

export default BlogPost;