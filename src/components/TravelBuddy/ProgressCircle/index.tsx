import * as React from 'react';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import '../style.css';

export const ProgressCircle = (props) => {
  const { rotate, waitFor, show, position, index } = props;
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    if (show === true) {
      setTimeout(() => {
        setReveal(true);
      }, waitFor);
    }
  }, []);

  const percents = 8;
  const stroke = position === index ? '#003B95' : '#3DAEFF';
  const size = 400;
  const strokeWidth = 12;
  const emptyStroke = '#E5E5E5';
  const emptyStrokeOpacity = 0.25;
  const duration = 0.6;
  const delay = 0.5;
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
    <div
      className="progressCircle"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        transform: `rotate(${rotate}deg)`,
        'transform-origin': 'center center',
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        strokeLinecap="round"
        style={{
          position: 'relative',
          transform: 'rotate(-90deg)',
          overflow: 'visible',
        }}
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="circle"
          strokeWidth={strokeWidth}
          stroke={emptyStroke}
          strokeOpacity={emptyStrokeOpacity}
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          fill="transparent"
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        strokeLinecap="round"
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
          animate={reveal ? 'show' : 'hidden'}
        />
      </svg>
    </div>
  );
};
