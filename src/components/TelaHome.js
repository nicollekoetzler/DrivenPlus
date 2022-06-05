import { Link } from 'react-router-dom';
import styled from 'styled-components';
import D from '../assets/imgs/D.png'
import user from '../assets/imgs/user.png'

export default function TelaHome() {
    return(
        <Container>
            <Topbar>
                <img src={D}/>
                <img src={user}/>
            </Topbar>
            <Content>
                <Top>
                    <h1>Olá, fulano</h1>
                    <Button>
                        <button>Socilitar brindes</button>
                    </Button>
                    <Button>
                        <button>Materiais bônus de web</button>
                    </Button>
                </Top>
                <Bottom>
                    <Button>
                        <Link to={`/subscriptions`} >
                            <button>Mudar plano</button>
                        </Link>
                    </Button>
                    <CancelButton>
                        <button>Cancelar plano</button>
                    </CancelButton>
                </Bottom>
            </Content>
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
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

h1 {
    color: white;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 38px;
}
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Bottom = styled.div`
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
    font-weight: 700;
    font-size: 14px;
    margin: 4px 0;
}
`

const CancelButton = styled.div`

button {
    width: 303px;
    height: 50px;
    background: #FF4747;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20.976px;
    font-style: normal;
    font-weight: 400;
    font-weight: 700;
    font-size: 14px;
    margin: 4px 0;
    margin-bottom: 12px;
}
`