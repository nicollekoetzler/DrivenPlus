import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/imgs/logo.png'
import { useState } from 'react';
import axios from 'axios'
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function TelaLogin() {
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";

    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const { infosUsuario, setInfosUsuario } = useContext(UserContext);

    const navigate = useNavigate();

    function setData(event){
        event.preventDefault();

        const body = {
            email: inputEmail,
	        password: inputPassword
        }

        const promise = axios.post(URL, body);

        promise.then((response) => {
            setInfosUsuario(response.data);

            if((response.data.membership) === null){
                navigate("/subscriptions")
            } else {
                navigate("/home")
            }
            //haveMembership(response.data.membership);
        });

        promise.catch(err => alert("Usuário inválido."));

    }

    /*function haveMembership(membership) {
        if(membership === null){
            navigate("/subscriptions")
        }
    }*/

    return(
        <Container>
            <img src={logo} />
            <form onSubmit={setData}>
                <Input>
                    <input onChange={e => setInputEmail(e.target.value)} value={inputEmail} type="email" placeholder="E-mail" />
                </Input>
                <Input>
                    <input onChange={e => setInputPassword(e.target.value)} value={inputPassword} type="password" placeholder="Senha" />
                </Input>
                <Button>
                    <button>ENTRAR</button>
                </Button>
            </form>
            <Link to={`/sign-up`} >
                <p>Não possui uma conta? Cadastre-se</p>
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