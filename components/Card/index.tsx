import { FC } from 'react';
import { Box, Flex, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { Praise } from '../../interfaces';

type CardProps = Praise;

const Card: FC<CardProps> = ({ title = '', category, cd, externalURL, imagePath, type, year }) => {
  return (
    <Flex
      p={4}
      rounded='md'
      alignItems='center'
      border='1px solid'
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      _hover={{ borderColor: 'gray.400', cursor: 'pointer' }}
      position='relative'
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
      </Box>
      <Tag paddingInlineStart={4} paddingInlineEnd={4} size='sm'>
        {type}
      </Tag>
    </Flex>
  );
};

export default Card;
