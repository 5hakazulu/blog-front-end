import { createSlice } from '@reduxjs/toolkit';

export const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogPosts: []
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogPosts = action.payload
        },
        addBlog: (state, action) => {
            state.contacts = [...state.contacts, action.payload]
        },
        searchBlog: (state, action) => {
            state.blogPosts = action.payload
        }
    }
})

export const { setBlogs, addBlog, searchBlog } = blogSlice.actions;

export default blogSlice.reducer;