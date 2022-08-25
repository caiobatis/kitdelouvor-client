import { FC } from 'react';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Praise } from '../../interfaces';

type CardProps = Praise;

const Card: FC<CardProps> = ({ title = '', category, cd, externalURL, type, year, author }) => {
  return (
    <Flex
      p={4}
      rounded='md'
      alignItems='center'
      border='1px solid'
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      _hover={{ borderColor: 'gray.400', cursor: 'pointer' }}
      position='relative'
      as='a'
      href={externalURL}
      target='_blank'
    >
      <Flex
        rounded='md'
        minW={12}
        h={12}
        alignItems='center'
        justifyContent='center'
        backgroundColor='gray.600'
        mr={4}
      >
        <Text fontSize='2xl' fontWeight={200} color='white'>
          {category.split(' ')[0][0].toUpperCase()}
          {category.split(' ')[1][0].toUpperCase()}
        </Text>
      </Flex>
      <Box w='full'>
        <Text fontSize='md' fontWeight={600}>
          {title}
        </Text>
        <Flex>
          <Text fontSize='xs'>{category}</Text>
          <Text fontSize='xs' ml={4}>
            <b>
              {year && `${year}`} {cd && `- ${cd}`}
            </b>
          </Text>
        </Flex>
        <Text fontSize='xs'>{author}</Text>
      </Box>
      <Box
        px={2}
        bgColor={useColorModeValue('gray.200', 'gray.600')}
        fontSize='xs'
        borderRadius={8}
      >
        {type}
      </Box>
    </Flex>
  );
};

export default Card;
