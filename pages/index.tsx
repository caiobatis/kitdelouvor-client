import {
  Container,
  Heading,
  Input,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from '../components/Card';

import Layout from '../components/Layout/Layout';

const IndexPage = () => (
  <Layout>
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 8, md: 8 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Encontre seu{' '}
          <Text as={'span'} color={'orange.400'}>
            Kit de Louvor
          </Text>
        </Heading>

        <Text color={'gray.500'} maxW={'3xl'}>
          Use a barra de busca abaixo para procurar pelo hino desejado. Busque por título, nome do
          CD ou ano da música.
        </Text>

        <Stack spacing={6} direction='row' w={{ base: 'full', md: 'xl' }}>
          <Input
            w='full'
            rounded='full'
            borderColor={useColorModeValue('gray.400', 'gray.600')}
            placeholder='Busque aqui'
            _placeholder={{
              color: useColorModeValue('gray.500', 'gray.600'),
            }}
          />

          <Button
            px={12}
            rounded='full'
            colorScheme='orange'
            bg='orange.400'
            _hover={{ bg: 'orange.500' }}
          >
            Buscar
          </Button>
        </Stack>
      </Stack>

      <Stack spacing={{ base: 4, md: 4 }} py={{ base: 8, md: 8 }}>
        <Text color='gray.500' fontSize='md'>
          Ministério Jovem
        </Text>

        <Card />

        <Card />

        <Card />
      </Stack>

      <Stack spacing={{ base: 4, md: 4 }} py={{ base: 8, md: 8 }}>
        <Text color='gray.500' fontSize='md'>
          Hinário Adventista
        </Text>

        <Card />

        <Card />

        <Card />
      </Stack>

      <Stack spacing={{ base: 4, md: 4 }} py={{ base: 8, md: 8 }}>
        <Text color='gray.500' fontSize='md'>
          Novo Hinário Adventista
        </Text>

        <Card />

        <Card />

        <Card />
      </Stack>
    </Container>
  </Layout>
);

export default IndexPage;
