import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages';
import BlogPost from './pages/BlogPosts';
import React, { useState } from 'react';

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
  const getData = blog => {
    setGetBlogContent(blog);
  };
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage data={getData} />} />
          <Route
            path="/blog/:id"
            element={<BlogPost content={getBlogContent} />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
