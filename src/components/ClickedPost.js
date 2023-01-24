import React, { useState, useEffect } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion/dist/framer-motion';
import Post from './Post';

export const MyComponent = function() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    animate: { opacity: 1, display: 'block' },
    transition: { duration: 0.2, type: 'spring', damping: 10, mass: 0.6 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div>
      {isOpen ? (
        <motion.div
          className="extended-post"
          variants={variants}
          animate={{
            x: 125,
            y: -10,
            scale: 1,
            initial: 'hidden',
            animate: 'visible',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div className="extended-post-header">
            <h1 className="InfoSec-extended">InfoSec</h1>

            {/* <img
              className="infosec-extended"
              src="https://m.foolcdn.com/media/dubs/original_images/11_cybersecurity_padlock.jpg"
            /> */}
            <h2 className="get-ready">Get ready...</h2>
            <img
              className="img-loading"
              src="https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png"
              alt=""
            ></img>
            <p className='content-loading-soon'>Content loading soon!</p>
          </div>

          

          <p></p>
        </motion.div>
      ) : (
        <motion.div
          className="normal-post"
          Layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, display: 'block' }}
          transition={{
            duration: 0.3,
            bounce: 0,
          }}
          exit={{ opacity: 0 }}
          onClick={() => {
            return setIsOpen(!isOpen);
          }}
        >
          <Post />
        </motion.div>
      )}
    </motion.div>
  );
};
// export default ClickedPost;
