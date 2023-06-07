import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import CheckboxGroup from 'react-checkbox-group';
import {
    Container,
    Content,
    MainTitle,
    CheckboxContainer,
    CheckboxLabel,
    Buttons,
    Button,
    ButtonContainer, 
    CancelButton, 
    RemoveButton,
    Img,
    ButtonDelete
} from './styles';

import { Link } from "react-router-dom";
import { Modal } from "../../Modal";


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
    const [data, setData] = useState<Data | null>(null);
    const { id } = useParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

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

    function handleCheckboxChange(checkedDays: string[]) {
        setData(checkedDays);
    }

    if (!data) {
        return <div>Carregando...</div>;
    }



    function handleDeleteList() {
        axios
            .delete(`http://172.18.0.126:3333/tasks/${id}`)
            .then(() => {
                setData(null);
                navigate('/')
            })
            .catch((error) => {
                console.error('Erro ao buscar dados da API:', error);
            });

    };





    return (
        <Container>
                <MainTitle>{data.compromisso}</MainTitle>
            <h2 key={data.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Img src={data.imagem} alt="Imagem" />
                <p>{data.description}</p>
            </h2>
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
                <Buttons>
                    <Link to={`/cadastro/${id}`}>
                        <Button>Editar</Button>
                    </Link>
                    <ButtonDelete onClick={openModal}>Deletar</ButtonDelete>
                </Buttons>
                <Modal isOpen={isModalOpen} onClose={closeModal} title="Remover compromisso?">
                    <ButtonContainer>
                        <CancelButton onClick={closeModal}>Cancelar</CancelButton>
                        <RemoveButton onClick={handleDeleteList}>Remover</RemoveButton>
                    </ButtonContainer>
                </Modal>




            </Content>
        </Container>
    );
}
