import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogsSlice'

export default configureStore({
    reducer: {
        blogs: blogReducer
    }
})