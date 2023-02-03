import React, { useState, useEffect } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion/dist/framer-motion';
import { CyberArticle } from './CyberArticleData';

export const CyberPost = function() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    animate: { opacity: 1, display: 'block' },
    transition: { duration: 0.125, type: 'spring', damping: 10, mass: 0.6 },
    exit: { opacity: 0 },
  };
  const [isHovering, setHover] = useState(false);
  const hoverOn = () => {
    setHover(true);
  };
  const hoverOut = () => {
    setHover(false);
  };
  const icon = {
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: '#60aaf3',
    },
  };

  return (
    <motion.div>
      {isOpen ? (
        <motion.div
          className="extended-cyber-post"
          variants={variants}
          animate={{
            x: -225,
            y: -10,
            scale: 1,
            initial: 'hidden',
            animate: 'visible',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div className="cyber-post-header">
            <h1 className="cyber-extended-title">Cyber Threat Intelligence</h1>
            <CyberArticle/>
           </div>
        </motion.div>
      ) : (
        <motion.div
          className="normal-post"
          Layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, display: 'block' }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            bounce: 0,
            type: 'easeIn',
          }}
          onClick={() => {
            console.log('clicked');
            return setIsOpen(!isOpen);
          }}
        >
          <motion.div
            className="cyber-post"
            animate={{
              x: 0,
              y: 10,
              scale: 1,
              initial: 'hidden',
              animate: 'visible',
            }}
            whileHover={{ scale: 1.2 }}
            variants={{ icon }}
            onMouseOver={hoverOn}
            onMouseOut={hoverOut}
          >
            <div className="background-cyber">
              <motion.h1 className="title-cyber">
                Cyber threat intelligence
              </motion.h1>
              <img
                className="img-cyber-post"
                src="https://www.channelfutures.com/files/2021/02/Cyberthreats-877x432.jpg"
              />
            </div>
            {isHovering && (
              <div className="summary-cyber-post">
                <h3 className="summary-title-cyber-post">Summary</h3>

                <motion.p className='cyber-sum-cont'>
                  Cyber threat intelligence(CTI) is a cyber security domain that
                  focuses on analysis of threats, vulnerabilities and risk
                  towards the enterprise.
                </motion.p>

                <footer className="cyber-post-footer">
                  &copy;All post of the blog are wrote entirely by the
                  author(Horvat Andrei Cristian)
                </footer>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
