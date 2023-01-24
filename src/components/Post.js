import React, { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
} from 'framer-motion/dist/framer-motion';
import '../index.css';
import { MyComponent } from './ClickedPost';

const icon = {
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#60aaf3',
  },
};

export const Post = () => {
  const [isHovering, setHover] = useState(false);
  const hoverOn = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };
  return (
    <motion.div
      className="post"
      animate={{
        x: -225,
        y: -10,
        scale: 1,
        initial: 'hidden',
        animate: 'visible',
      }}
      whileHover={{ scale: 1.2 }}
      variants={{ icon }}
      onMouseOver={hoverOn}
      onMouseOut={hoverOut}
    >
      <div className="background-infosec">
        <motion.h1 className="title-infosec">InfoSec</motion.h1>
        <img
          className="img-infosec-post"
          src="https://m.foolcdn.com/media/dubs/original_images/11_cybersecurity_padlock.jpg"
        />
      </div>
      {isHovering && (
        <div className="summary-post">
          <h3 className="summary-title-post">Summary</h3>
          <div className="info-sec-sum-content">
            <motion.p>
              Information Security focuses on the security of the enterprise.
            </motion.p>
            <p>Content loading soon!</p>
          </div>
          <footer className="infosec-post-footer">
            &copy;All post of the blog are wrote entirely by the author(Horvat
            Andrei Cristian)
          </footer>
        </div>
      )}
    </motion.div>
  );
};
export default Post;
