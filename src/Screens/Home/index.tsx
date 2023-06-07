import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Container,
  MainTitle,
  Filter,
  Content,
  Button,
  Img
} from "./styles";

interface Data {
  id: string;
  compromisso: string;
  description: string;
  imagem: string;
  segunda_feira: boolean;
  terca_feira: boolean;
  quarta_feira: boolean;
  quinta_feira: boolean;
  sexta_feira: boolean;
  sabado: boolean;
  domingo: boolean;
}

export function Home() {
  const [data, setData] = useState<Data[]>([]);

  function showData() {
    axios
      .get('http://172.18.0.126:3333/tasks')
      .then((response) => {
        setData(response.data);
      })

      .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }

  useEffect(() => {
    showData();
  }, []);


  return (
    <Container>
      <MainTitle>Compromisso</MainTitle>
      <Link to={'/cadastro'} >
        <Button>Cadastro</Button>
      </Link>
      <Filter>
        <input type="search" name="" id="" placeholder="Pesquise pelo título ou descrição..." />
      </Filter>
      <Content>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <Img src={item.imagem} alt="Imagem" />
              <Link to={`/detalhes/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <p>{item.compromisso}</p>
                <p>{item.description}</p>
                {item.segunda_feira && <p>Segunda</p>}
                {item.terca_feira && <p>Terça</p>}
                {item.quarta_feira && <p>Quarta</p>}
                {item.quinta_feira && <p>Quinta</p>}
                {item.sexta_feira && <p>Sexta</p>}
                {item.sabado && <p>Sábado</p>}
                {item.domingo && <p>Domingo</p>}
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
