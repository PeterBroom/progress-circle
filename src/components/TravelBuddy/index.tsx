import * as React from 'react';
import { useState } from 'react';
import { ProgressCircle } from './ProgressCircle';
import { motion } from 'framer-motion';
import './style.css';
const customerStatus = 5;

export const TravelBuddy = (props) => {
  const { schema } = props;

  const [position, setPosition] = useState(customerStatus);

  const prev = () => {
    if (position > 1) {
      setPosition(position - 1);
    }
  };

  const next = () => {
    if (position < customerStatus) {
      setPosition(position + 1);
    }
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <p>position : {position}</p>
      <motion.div className="travelBuddyContainer">
        {schema.map((progress, index) => {
          const duration = 650 * index;
          return (
            <ProgressCircle
              rotate={51.5 * index}
              waitFor={duration}
              show={customerStatus > index}
              position={position}
              index={index + 1}
              key={index}
            />
          );
        })}
      </motion.div>
      {schema.map(
        (progress, index) =>
          position === index + 1 && (
            <div key={index}>
              <h3>{progress.title}</h3>
              <p>{progress.text}</p>
            </div>
          )
      )}
    </div>
  );
};
