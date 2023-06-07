import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, MainTitle, Form, Input, TextArea, Button, CheckboxContainer, CheckboxLabel, Img } from './styles';
import CheckboxGroup from 'react-checkbox-group';
import { v4 as uuidv4 } from 'uuid';

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
    const [imagem, setImage] = useState('');
    const [dates, setDates] = useState<string[]>([]);
    const navigate = useNavigate();
    const { id } = useParams()
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        if (id) {
            showApi();
        }
    }, [id]);

    function getCheckedDays(task: Data): string[] {
        const checkedDays: string[] = [];
        if (task.segunda_feira) checkedDays.push('Segunda-feira');
        if (task.terca_feira) checkedDays.push('Terça-feira');
        if (task.quarta_feira) checkedDays.push('Quarta-feira');
        if (task.quinta_feira) checkedDays.push('Quinta-feira');
        if (task.sexta_feira) checkedDays.push('Sexta-feira');
        if (task.sabado) checkedDays.push('Sábado');
        if (task.domingo) checkedDays.push('Domingo');
        return checkedDays;
    }

    function showApi() {
        axios
            .get(`http://172.18.0.126:3333/tasks/${id}`)
            .then((response) => {
                const task: Data = response.data;
                setCompromisso(task.compromisso);
                setDescription(task.description);
                setImage(task.imagem);
                setDates(getCheckedDays(task));
            })
            .catch((err) => {
                console.error('Erro ao buscar dados da API:', err);
            });
    }


    useEffect(() => {
        showApi();
        const timer = setTimeout(() => {
            setDates(dates);
        }, 1000000);

        return () => clearTimeout(timer);
    }, []);

    function handleAtualizarDados() {
        const data: Data = {
            id: uuidv4(),
            compromisso: compromisso,
            description: description,
            imagem: imagem,
            segunda_feira: dates.includes('Segunda-feira'),
            terca_feira: dates.includes('Terça-feira'),
            quarta_feira: dates.includes('Quarta-feira'),
            quinta_feira: dates.includes('Quinta-feira'),
            sexta_feira: dates.includes('Sexta-feira'),
            sabado: dates.includes('Sábado'),
            domingo: dates.includes('Domingo'),
        };

        axios
            .put(`http://172.18.0.126:3333/tasks/${id}`, data)
            .then(response => {
                console.log('Dados atualizados na API:', response.data);
                navigate('/');
            })
            .catch(err => {
                console.error('Erro ao atualizar dados na API:', err);
            });
    }

    function handleEnviarDados() {
        if (!imagem.trim() ||
            !compromisso.trim() ||
            !description.trim() ||
            dates.length === 0){
            return;
        }

        const data: Data = {
            id: uuidv4(),
            compromisso: compromisso,
            description: description,
            imagem: imagem,
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
                navigate('/');
            })
            .catch(err => {
                console.log('Deu ruim...', err);
            });

    }


    return (
        <Container>
            <MainTitle>Cadastro / Alteração</MainTitle>
            <Form>
                <Input 
                type="url" 
                name="imagem" 
                value={imagem}
                placeholder='Insira a URL da imagem desejada' 
                onChange={(event) => setImage(event.target.value)}
                required
                />
                <Img src={imagem} alt='' style={{ display: id ? 'block' : 'none' }} />
                <Input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={compromisso}
                    onChange={(event) => setCompromisso(event.target.value)}
                    required
                />
                <TextArea
                    name="descricao"
                    placeholder="Descrição"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
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

            <Button onClick={id ? handleAtualizarDados : handleEnviarDados} disabled={!imagem.trim() || !compromisso.trim() || !description.trim()}>
                {id ? 'Atualizar' : 'Cadastrar'}
            </Button>

        </Container>
    );
}