import * as React from 'react';
import { ProgressCircle } from './ProgressCircle';
import { motion } from 'framer-motion';
import './style.css';
const customerStatus = 5;

export const TravelBuddy = (props) => {
  const { schema } = props;
  return (
    <div>
      <motion.div className="travelBuddyContainer">
        {schema.map((progress, index) => {
          const duration = 650 * index;
          return (
            <ProgressCircle
              rotate={51.5 * index}
              strokeColor="#1879ca"
              waitFor={duration}
              show={customerStatus > index}
              key={index}
            />
          );
        })}
      </motion.div>
      {schema.map(
        (progress, index) =>
          customerStatus === index && (
            <div key={index}>
              <h3>{progress.title}</h3>
              <p>{progress.text}</p>
            </div>
          )
      )}
    </div>
  );
};
