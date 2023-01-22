import {
  Container,
  Heading,
  Input,
  Stack,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import Card from '../components/Card';

import Layout from '../components/Layout/Layout';
import { Praise } from '../interfaces';
import { praiseData } from '../utils/praises-data';

type IndexProps = {
  data: Array<Praise>;
};

const groupBy = function (xs: Array<Praise>, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const IndexPage: FC<IndexProps> = ({ data = [] }) => {
  const [search, setSearch] = useState('');

  const dataByCategory = groupBy(data, 'category');

  return (
    <Layout>
      <Container maxW={'5xl'} minH={'4xl'}>
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
            <Text as='span' color='orange.400'>
              Kit de Louvor
            </Text>
          </Heading>

          <Text color={useColorModeValue('gray.500', 'gray.200')} maxW={'3xl'}>
            Utilize a barra de pesquisa abaixo para encontrar o hino desejado. Pesquise por título, nome do álbum ou ano da música.
          </Text>

          <Stack spacing={6} direction='row' w={{ base: 'full', md: 'xl' }}>
            <Input
              w='full'
              rounded='full'
              placeholder='Busque aqui'
              borderColor={useColorModeValue('gray.500', 'gray.400')}
              _placeholder={{
                color: useColorModeValue('gray.500', 'gray.400'),
              }}
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />

            <Button
              px={12}
              rounded='full'
              colorScheme='orange'
              bg='orange.400'
              _hover={{ bg: 'orange.500' }}
              // onClick={() => setSearch()}
            >
              Buscar
            </Button>
          </Stack>
        </Stack>

        {/* eslint-disable */}
        {!search
          ? Object.keys(dataByCategory).map(listItem => (
            <Stack key={Math.random()} spacing={{ base: 4, md: 4 }} py={{ base: 8, md: 8 }}>
              <Text color='gray.500' fontSize='md'>
                {listItem}
              </Text>
              {dataByCategory[listItem].slice(0, 5).map(item => (
                <Card key={Math.random()} {...item} />
              ))}
            </Stack>
          ))
          :  (
              <Stack key={Math.random()} spacing={{ base: 4, md: 4 }} py={{ base: 8, md: 8 }}>
                <Text color='gray.500' fontSize='md'>
                  Buscando por {search}
                </Text>

                {data.filter((item)=> (item.author.toLowerCase().includes(search.toLowerCase()) || 
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase()))).map(item => (
                  <Card key={Math.random()} {...item} />
                ))}
              </Stack>
            )}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      data: praiseData,
    },
  };
}

export default IndexPage;
