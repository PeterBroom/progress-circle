import * as React from 'react';
import { ProgressCircle } from './ProgressCircle';
import { motion } from 'framer-motion';

const customerStaus = 8;

export const TravelBuddy = () => {
  return (
    <motion.div className="travelBuddyContainer">
      <ProgressCircle
        rotate={2}
        strokeColor="#1879ca"
        waitFor={1000}
        show={customerStaus > 1}
      />
      <ProgressCircle
        rotate={52}
        strokeColor="#1879ca"
        waitFor={2500}
        show={customerStaus > 2}
      />
      <ProgressCircle
        rotate={104}
        strokeColor="#1879ca"
        waitFor={4000}
        show={customerStaus > 3}
      />
      <ProgressCircle
        rotate={156}
        strokeColor="#1879ca"
        waitFor={5500}
        show={customerStaus > 4}
      />
      <ProgressCircle
        rotate={208}
        strokeColor="#1879ca"
        waitFor={7000}
        show={customerStaus > 5}
      />
      <ProgressCircle
        rotate={260}
        strokeColor="#1879ca"
        waitFor={8500}
        show={customerStaus > 6}
      />
      <ProgressCircle
        rotate={312}
        strokeColor="#1879ca"
        waitFor={10000}
        show={customerStaus > 7}
      />
    </motion.div>
  );
};
