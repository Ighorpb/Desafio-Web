import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';



import { Container, MainTitle, Form, Input, TextArea, Button, CheckboxContainer, CheckboxLabel } from './styles';

import CheckboxGroup from 'react-checkbox-group';

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

export function Cadastro() {
  const [compromisso, setCompromisso] = useState('');
  const [description, setDescription] = useState('');
  const [dates, setDates] = useState<string[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDates(dates);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  function handleEnviarDados() {
    const data: Data = {
      id: uuidv4(),
      compromisso: compromisso,
      description: description,
      imagem: '',
      segunda_feira: dates.includes('Segunda-feira'),
      terca_feira: dates.includes('Terça-feira'),
      quarta_feira: dates.includes('Quarta-feira'),
      quinta_feira: dates.includes('Quinta-feira'),
      sexta_feira: dates.includes('Sexta-feira'),
      sabado: dates.includes('Sábado'),
      domingo: dates.includes('Domingo'),
    };

    axios
      .post('http://172.18.0.126:3333/tasks', data)
      .then(response => {
        console.log('Deu certo, dados na api', response.data);
          Cadastro()
      })
      .catch(err => {
        console.log('Deu ruim...', err);
      });
      
      navigate('/');
}
    function handleEditContent(){
        axios
            .put(`http://172.18.0.126:3333/tasks/${id}`, {
                "compromisso": "teste 32",
                "description": "teste 33",
                "imagem": "",
                "segunda_feira": false,
                "terca_feira": false,
                "quarta_feira": false,
                "quinta_feira": false,
                "sexta_feira": true,
                "sabado": false,
                "domingo": false
            })
            .then((response) => {
                const task: Data = response.data;
                setData(task);
            })
            .catch((err) => {
                console.log('Ocorreu um erro', err)
            })

    }

    useEffect(()=> {
        if(id){
            const response = axios.get(`http://172.18.0.126:3333/tasks/${id}`,)
            const task: Data = response.data;
            setData(task);
        }
    },[])
        

    return (
        <Container>
            <MainTitle>Cadastro / Alteração</MainTitle>
            <Form>
                <Input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={compromisso}
                    onChange={(event) => setCompromisso(event.target.value)}
                />
                <TextArea
                    name="descricao"
                    placeholder="Descrição"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Form>
            <CheckboxGroup name="week-name" value={dates} onChange={setDates}>
                {(Checkbox) => (
                    <CheckboxContainer>
                        <CheckboxLabel>
                            <Checkbox value="Segunda-feira" /> Segunda-feira
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <Checkbox value="Terça-feira" /> Terça-feira
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <Checkbox value="Quarta-feira" /> Quarta-feira
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <Checkbox value="Quinta-feira" /> Quinta-feira
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <Checkbox value="Sexta-feira" /> Sexta-feira
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <Checkbox value="Sábado" /> Sábado
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <Checkbox value="Domingo" /> Domingo
                        </CheckboxLabel>
                    </CheckboxContainer>
                )}
            </CheckboxGroup>

            <Button onClick={handleEnviarDados}>Cadastrar</Button>
        </Container>
    );
}

