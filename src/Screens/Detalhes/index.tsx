import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import CheckboxGroup from 'react-checkbox-group';
import { Container, Content, MainTitle, CheckboxContainer, CheckboxLabel, Button, ButtonDelete, ButtonEdit } from './styles';
import { useNavigate } from "react-router-dom";

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

export function Details() {
    const navigate = useNavigate()
    const [data, setData] = useState<Data | null>(null);
    const { id } = useParams()

    function showApi() {
        axios
            .get(`http://172.18.0.126:3333/tasks/${id}`)
            .then((response) => {
                const task: Data = response.data;
                setData(task);
            })
            .catch((err) => {
                console.error('Erro ao buscar dados da API:', err);
            });
    }

    useEffect(() => {
        showApi();
    }, []);

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

    function handleCheckboxChange(checkedDays: string[]): void {
        setData(checkedDays);
    }

    if (!data) {
        return <div>Carregando...</div>;
    }

    function handleDeleteList() {
        axios
            .delete(`http://172.18.0.126:3333/tasks/${id}`)
            .then((response) => {
                const task: Data = response.data;
                setData(task);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados da API:', error);
            });

            navigate('/')
    };

    function handleEditButton(){
        navigate('/cadastro')
    }

    return (
        <Container>
            <MainTitle>{data.compromisso}</MainTitle>
            <ul>
                <li key={data.id}>
                    <p>{data.description}</p>
                </li>
            </ul>

            <Content>
                <CheckboxGroup name="week-name" value={getCheckedDays(data)} onChange={handleCheckboxChange}>
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
                <Button>
                    <div>
                        <ButtonDelete onClick={handleDeleteList}>Remover</ButtonDelete>
                        <ButtonEdit onClick={handleEditButton}>Editar</ButtonEdit>
                    </div>
                    
                </Button>
                
            </Content>

        </Container>
    );
}
