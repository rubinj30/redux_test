import { FETCH_POSTS, NEW_POST } from './types'

export const fetchPosts = () => dispatch => {
    console.log('fetching on postActions')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts.slice(1,10)
        }))
}
