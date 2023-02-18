import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBlog } from '../features/blogsSlice';

const AddBlogForm = () => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    const submitForm = async (event) => {
        event.preventDefault();
        await fetch('/newPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                contents: contents,
                category: category
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                dispatch(addBlog(data));
                setTitle("");
                setContents("");
                setCategory("");
            })
            .catch((error) =>
                console.log("Unable to add contact", error)
            )
    }
    return (
        <form id='add-blog' onSubmit={submitForm}>
            <label htmlFor='title'>Title:</label><br />
            <input onChange={(event) => setTitle(event.target.value)}
                type="text" id="name" name="name" placeholder='Really Cool title here' /><br />
            <label htmlFor='contents'>Contents:</label><br />
            <textarea onChange={(event) => setContents(event.target.value)}
                type="text" id="contents" name="contents" rows="7" cols="50" placeholder='What is on your mind?' /><br />
            <label htmlFor='category'>Category:</label><br />
            <input onChange={(event) => setCategory(event.target.value)}
                type="text" id="category" name="category" placeholder='What you want?' /><br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AddBlogForm;