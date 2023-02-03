import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePages';
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
        </Routes>
      </div>
    </div>
  );
}
export default App;
