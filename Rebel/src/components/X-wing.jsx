import React, { useRef } from 'react';
import './X-wing.css';
import { motion } from 'framer-motion';
import xWing from '../images/x-wing-play.png';
import followPointer from '../utils/followPointer';

export default function XWing() {
  const cursor = useRef();
  const { x } = followPointer(cursor);
  return (
    <motion.div
      ref={cursor}
      className="XWing-div"
      animate={{
        x,
      }}
      transition={{
        type: 'spring',
        bounce: 5,
        mass: 5,
        damping: 12,
        stiffness: 20,
        restDelta: 0.001,
      }}
    >
      <img className="play-x-wing" src={xWing} alt="x-wing" />
    </motion.div>

  );
}
