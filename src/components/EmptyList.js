import React, { useState } from 'react';
import '../index.css';
// import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { MyComponent } from './ClickedPost';
import Post from './Post';
import { CyberPost } from './CyberPost';

const EmptyList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="emptyList-wrap">
      
      <MyComponent /> 
      <CyberPost></CyberPost>
      
    </div>
  );
};

export default EmptyList;
