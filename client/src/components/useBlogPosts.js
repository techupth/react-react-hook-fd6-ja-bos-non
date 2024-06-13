import { useEffect, useState } from "react";
import axios from "axios";

const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const results = await axios.get("http://localhost:4000/posts");
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return { posts, isLoading, isError };
};

export default useBlogPosts;
