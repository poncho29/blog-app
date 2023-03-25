/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";


const PostContext = createContext()

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('render')
    const postsStorage = localStorage.getItem('posts');

    if (JSON.parse(postsStorage)) {
      setPosts(JSON.parse(postsStorage));
    } else {
      localStorage.setItem('posts', JSON.stringify(posts))
      setPosts(posts);
    }
  }, []);

  const addPost = (post) => {
    const newPosts = posts.length === 0
      ? [post] 
      : [...posts, post];

    console.log(newPosts)
    localStorage.setItem('posts', JSON.stringify(newPosts))
    setPosts(newPosts);
  }

  const editPost = (id, post) => {
    let updatePost = posts.map(currentPost => {
      if (currentPost.id === id) {
        currentPost = post;
        return currentPost;
      }

      return currentPost
    })

    localStorage.setItem('posts', JSON.stringify(updatePost))
    setPosts(updatePost);
  }

  const removePost = (id) => {
    const newPosts = posts.filter(post => post.id !== id);

    localStorage.setItem('posts', JSON.stringify(newPosts))
    setPosts(newPosts);
  }

  const post = { posts, addPost, editPost, removePost }

  return (
    <PostContext.Provider value={post}>
      { children }
    </PostContext.Provider>
  )
}

const usePosts = () => {
  const posts = useContext(PostContext);
  return posts
}

export { PostProvider, usePosts }