import { React, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';

import { searchBlog } from '../features/blogsSlice';

const SearchForm = () => {
    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const submitForm = async (event) => {
        // dispatch(searchBlog())
        event.preventDefault();
        console.log(event.target.search)
        await fetch(`/posts/${event.target.search.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(response => response.json())
            //this is where we are setting the redux state constacts to the response we get from our express server
            .then(json => dispatch(searchBlog([json])));
    }

    return (
        <div>
            <form id='find-post' onSubmit={submitForm}>
                <label htmlFor="search">Search:</label><br />
                <input onChange={(event) => setSearch(event.target.value)} type="text" id="search" name="search" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SearchForm