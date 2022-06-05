import styled from 'styled-components';
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function TelaSignUp() {
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";

    const [inputEmail, setInputEmail] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputCpf, setInputCpf] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [infosCadastro, setInfosCadastro] = useState({});

    const navigate = useNavigate();

    function setData(event){
        event.preventDefault()

        const body = {
            email: inputEmail,
            name: inputName,
            cpf: inputCpf,
            password: inputPassword
        }

        const promise = axios.post(URL, body);

        promise.then((response) => {
            navigate("/")
        });

        promise.catch(err => alert("Falha no cadastro"));

    }


    return(
        <Container>
            <form onSubmit={setData}>
                <Input>
                    <input onChange={e => setInputName(e.target.value)} value={inputName} type="text" placeholder="Nome" />
                </Input>
                <Input>
                    <input onChange={e => setInputCpf(e.target.value)} value={inputCpf} type="text" placeholder="CPF" />
                </Input>
                <Input>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="E-mail" />
                </Input>
                <Input>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="Senha" />
                </Input>
                <Button>
                    <button>CADASTRAR</button>
                </Button>
            </form>
            <Link to={`/`} >
                <p>Já possui uma conta? Entre</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

p {
    color: white;
    font-size: 14px;
    text-decoration-line: underline;
    cursor: pointer;
}

img {
    margin-bottom: 100px;
}
`

const Input = styled.div`

input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    width: 303px;
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin: 6px 0;
    border-color: white;
    font-size: 14px;
    padding: 14px;
}

input:focus {
    outline: none !important;
}
`

const Button = styled.div`

button {
    width: 303px;
    height: 50px;
    background: #FF4791;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20.976px;
    font-style: normal;
    font-weight: 400;
    margin: 20px 0;
    font-weight: 700;
    font-size: 14px;
}
`