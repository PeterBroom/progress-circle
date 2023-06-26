import * as React from 'react';
import { useContext } from 'react';
import { IntersectionContext } from '../intersection-observer';

import { motion } from 'framer-motion';

export const ProgressCircle = ({}) => {
  const percents = 14;
  const stroke = '#1879ca';
  const size = 200;
  const strokeWidth = 6;
  const emptyStroke = '#000000';
  const emptyStrokeOpacity = 0.25;
  const duration = 3;
  const delay = 0.5;
  const { inView } = useContext(IntersectionContext);
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100))
  );

  const transition = {
    duration: duration,
    delay: delay,
    ease: 'easeIn',
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="circle"
          strokeWidth={strokeWidth}
          stroke={emptyStroke}
          strokeOpacity={emptyStrokeOpacity}
          fill="transparent"
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        stroke-linecap="round"
        style={{
          position: 'absolute',
          transform: 'rotate(-90deg)',
          overflow: 'visible',
          marginLeft: -size,
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          stroke={stroke}
          fill="transparent"
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        />
      </svg>
    </div>
  );
};
