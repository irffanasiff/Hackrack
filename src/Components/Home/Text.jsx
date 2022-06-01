import React, { useState } from 'react';
import AnimatedCharacters from '../../Helpers/AnimatedCharacters';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
const MotionBox = motion(Box);

export default function TextEffect() {
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: 'heading1',
      text: 'Developer Students',
      fontFamily: 'Inter',
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <MotionBox initial='hidden' animate='visible' variants={container}>
      <div className='container' alignText='center'>
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
    </MotionBox>
  );
}
