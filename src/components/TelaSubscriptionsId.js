import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../assets/imgs/arrow.png'
import plano1 from '../assets/imgs/plano1.png'
import listinha from '../assets/imgs/listinha.png'

export default function TelaSubscriptionsId() {
    return(
        <Container>
            <Topbar>
                <Link to={`/subscriptions`} >
                    <img src={arrow}/>
                </Link>
            </Topbar>
            <img src={plano1} />
            <h1>Driven Plus</h1>
            <Content>
                <ul>
                    <li>
                        <img src={listinha}/>
                        <h3>Benefícios:</h3>
                    </li>
                    <li>
                        <p>1. Brindes exclusivos</p>
                    </li>
                    <li>
                        <p>2. Materiais bônus de web</p>
                    </li>
                </ul>
                <div>
                    <img src={listinha}/>
                    <h3>Preco:</h3>
                </div>
                    <p>R$ 39,99 cobrados mensalmente</p>
            </Content>
            <form >
                <Input>
                    <input type="text" placeholder="Nome impresso no cartão" />
                </Input>
                <Input>
                    <input type="text" placeholder="Digitos do cartão" />
                </Input>
                    <Dupla>
                        <FirstInputDupla>
                            <input type="text" placeholder="Código de segurança" />
                        </FirstInputDupla>
                        <SecondInputDupla>
                            <input type="text" placeholder="Validade" />
                        </SecondInputDupla>
                    </Dupla>
                <Button>
                    <button>ASSINAR</button>
                </Button>
            </form>
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

h1 {
    font-weight: 700;
    font-size: 32px;
    color: white;
    margin-top: 14px;
}
`

const Topbar = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 28px;
`

const Content = styled.div`
    width: 299px;
    color: white;
    font-weight: 400;
    font-size: 14px;
`

const Input = styled.div`
input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    width: 299px;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin: 4px 0;
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
    width: 299px;
    height: 45px;
    background: #FF4791;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20.976px;
    font-style: normal;
    font-weight: 400;
    margin: 4px 0;
    font-weight: 700;
    font-size: 14px;
}
`

const Dupla = styled.div`
    display: flex;
`

const FirstInputDupla = styled.div`
input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    width: 145px;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin: 4px 0;
    border-color: white;
    font-size: 14px;
    padding: 6px;
}
input:focus {
    outline: none !important;
}
`

const SecondInputDupla = styled.div`
input {
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    width: 145px;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    margin: 4px 0;
    border-color: white;
    font-size: 14px;
    padding: 6px;
    margin-left: 8px;
}
input:focus {
    outline: none !important;
}
`