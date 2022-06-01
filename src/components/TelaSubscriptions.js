import styled from "styled-components"
import plano1 from '../assets/imgs/plano1.png'
import plano2 from '../assets/imgs/plano2.png'
import plano3 from '../assets/imgs/plano3.png'

export default function TelaSubscriptions() {
    return(
        <>
            <Container>
                <Header>
                    <h1>Escolha seu plano</h1>
                </Header>
                <div className="bottom">
                    <Plan>
                        <img src={plano1}/>
                        <h2>R$ 39,99</h2>
                    </Plan>
                    <Plan>
                        <img src={plano2}/>
                        <h2>R$ 69,99</h2>
                    </Plan>
                    <Plan>
                        <img src={plano3}/>
                        <h2>R$ 99,99</h2>
                    </Plan>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0E0E13;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Header = styled.div`

h1 {
    color: white;
    font-weight: 700;
    font-size: 32px;
    margin: 24px;
}
`

const Plan = styled.div`
    width: 290px;
    height: 180px;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

h2 {
    color: white;
    font-weight: 700;
    font-size: 24px;
}

img {
    width: 140px;
    height: 95px;
}
`