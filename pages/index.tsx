import {
  Container,
  Heading,
  Input,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import Card from '../components/Card';

import Layout from '../components/Layout/Layout'

const IndexPage = () => (
  <Layout>
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
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
          Use a barra de busca abaixo para procurar pelo hino desejado. Separamos por título da música, CD e ano.
        </Text>

        <Stack spacing={6} direction={'row'} w={'full'}>
          <Input 
            rounded={'full'}
            placeholder='Título, CD ou ano'
            w={'full'}
          />

          <Button
            rounded={'full'}
            px={12}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Buscar
          </Button>
        </Stack>
      </Stack>

      <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >

        <Text as={'span'} color={'orange.400'}>
          Kit de Louvor
        </Text>

        <Card />
        <Card />
        <Card />
      </Stack>
    </Container>
  </Layout>
)

export default IndexPage
