import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
const MotionBox = motion(Box);

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'Heading',
  heading2: 'Text',
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(' ');

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(''));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0');
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Box as='span' mx='auto' w='full' key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <Box
                  as='span'
                  overflow='hidden'
                  display='inline-block'
                  key={index}
                >
                  <MotionBox
                    as='span'
                    display='inline-block'
                    fontSize={['32px', '42px', '58px', '92px']}
                    fontFamily={props.fontFamily}
                    //  fontWeight={props.type === 'heading1' ? '800' : '300'}
                    fontWeight='900'
                    lineHeight='120%'
                    h={'fit-content'}
                    letterSpacing={{ base: '0px', md: '-2px' }}
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </MotionBox>
                </Box>
              );
            })}
          </Box>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedCharacters;
