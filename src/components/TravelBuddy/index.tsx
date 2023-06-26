import * as React from 'react';
import { ProgressCircle } from './ProgressCircle';
import { motion } from 'framer-motion';
import './style.css';
const customerStaus = 5;
const duration = 650;

export const TravelBuddy = () => {
  return (
    <motion.div className="travelBuddyContainer">
      <ProgressCircle
        rotate={2}
        strokeColor="#1879ca"
        waitFor={duration}
        show={customerStaus > 0}
      />
      <ProgressCircle
        rotate={52}
        strokeColor="#1879ca"
        waitFor={duration * 2}
        show={customerStaus > 1}
      />
      <ProgressCircle
        rotate={104}
        strokeColor="#1879ca"
        waitFor={duration * 3}
        show={customerStaus > 2}
      />
      <ProgressCircle
        rotate={156}
        strokeColor="#1879ca"
        waitFor={duration * 4}
        show={customerStaus > 3}
      />
      <ProgressCircle
        rotate={208}
        strokeColor="#1879ca"
        waitFor={duration * 5}
        show={customerStaus > 4}
      />
      <ProgressCircle
        rotate={260}
        strokeColor="#1879ca"
        waitFor={duration * 6}
        show={customerStaus > 5}
      />
      <ProgressCircle
        rotate={312}
        strokeColor="#1879ca"
        waitFor={duration * 7}
        show={customerStaus > 6}
      />
    </motion.div>
  );
};
