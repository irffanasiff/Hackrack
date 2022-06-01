import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';

const EventsHeading = () => {
  return (
    <Center color='black'>
      <VStack>
        <Heading fontSize={['2xl', '3xl']} fontWeight='400' textAlign='center'>
          Hackrack Workshops
        </Heading>
        <Text fontWeight='300' fontSize={['sm', 'md', 'lg']} textAlign='center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </Text>
      </VStack>
    </Center>
  );
};

export default EventsHeading;
