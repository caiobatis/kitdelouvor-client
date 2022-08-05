import { FC } from 'react';
import { Box, Button, Flex, Tag, Text, useColorModeValue } from '@chakra-ui/react';

interface Card {
  title?: string;
}

const Card: FC<Card> = () => {
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
          NO
        </Text>
      </Flex>
      <Box w='full'>
        <Flex>
          <Text fontSize='md' fontWeight={600}>
            Sou de Jesus
          </Text>
        </Flex>
        <Text fontSize='sm'>
          2006 | CD Sou de Jesus | <b>Ministério Jovem</b>
        </Text>
      </Box>
      <Tag paddingInlineStart={4} paddingInlineEnd={4} size='sm'>
        cifra
      </Tag>
    </Flex>
  );
};

export default Card;
