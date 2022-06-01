import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function TelaSignUp() {
    return(
        <Container>
            <form>
                <Input>
                    <input type="text" placeholder="Nome" />
                </Input>
                <Input>
                    <input type="text" placeholder="CPF" />
                </Input>
                <Input>
                    <input type="email" placeholder="E-mail" />
                </Input>
                <Input>
                    <input type="password" placeholder="Senha" />
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
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin: 8px 0;
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
    height: 45px;
    background: #FF4791;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20.976px;
    font-style: normal;
    font-weight: 400;
    margin: 24px 0;
    font-weight: 700;
    font-size: 14px;
}
`