import { createContext, useContext, useEffect, useState } from "react";


const PostContext = createContext()

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsStorage = localStorage.getItem('posts');

    if (postsStorage) {
      setPosts(JSON.parse(postsStorage));
    }
  }, []);

  const addPost = (post) => {
    const newPosts = [...posts, post]
    localStorage.setItem('posts', JSON.stringify(newPosts))
    setPosts(newPosts);
  }

  const removePost = (slug) => {
    const newPosts = posts.filter(post => post.slug === slug);

    setPosts(...posts, newPosts);
  }

  const post = {posts, addPost, removePost}

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