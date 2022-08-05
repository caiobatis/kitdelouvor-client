import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box>
        <Container maxW="container.lg">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
              <Text fontSize={18}>Kit de Louvor</Text>
            </Box>

            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
