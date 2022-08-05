import { Box, Button, Flex, Tag, Text } from "@chakra-ui/react";
import { FC } from "react";

interface Card {

}

const Card: FC<Card> = () => {
  return (
    <Flex p={4} rounded="md" alignItems="center" border="1px solid #eee">
      <Flex rounded="md" minW={16} h={16} alignItems="center" justifyContent="center" backgroundColor="orange.400" mr={4}>
        <Text fontSize="2xl" color="white">NO</Text>
      </Flex>
      <Box w="full">
        <Flex>
          <Text fontSize="md" fontWeight={600}>020 - Grande é o Senhor</Text>
          <Tag ml={2}>Ministério Jovem</Tag>
        </Flex>
        <Text fontSize="sm">CD Volta Jesus - 2009 - CIFRA</Text>
      </Box>
      <Box>
        <Button
          px={12}
          rounded='full'
          colorScheme="gray"
        >
          Visualizar PDF
        </Button>
      </Box>
    </Flex>
  )
}

export default Card