import * as React from 'react';
import { ProgressCircle } from './ProgressCircle';
import { motion } from 'framer-motion';
import './style.css';
const customerStaus = 5;

export const TravelBuddy = (props) => {
  const { schema } = props;
  return (
    <motion.div className="travelBuddyContainer">
      {schema.map((progress, index) => {
        const duration = 650 * index;
        return (
          <>
            <p>{index}</p>
            <ProgressCircle
              rotate={51.5 * index}
              strokeColor="#1879ca"
              waitFor={duration}
              show={customerStaus > index}
            />
          </>
        );
      })}
    </motion.div>
  );
};
