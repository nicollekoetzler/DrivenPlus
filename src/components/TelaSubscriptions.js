import styled from "styled-components"
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from "../contexts/UserContext";
import { Link, useNavigate } from 'react-router-dom';

function Plans({image, price, id}) {
    return (
        <Plan>
            <img src={image} />
            <h2>{price}</h2>
        </Plan>
    )
}

export default function TelaSubscriptions() {
    const [plans, setPlans] = useState([]);
    const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships";
    const { infosUsuario, setInfosUsuario } = useContext(UserContext);

    useEffect(() => {

        const header = {
            headers: {
                "Authorization": `Bearer ${ infosUsuario.token }`
            }
        }

        const promise = axios.get(URL, header);
    
        promise.then(response => {  
            setPlans(response.data)
        })

    }, [] );

    return(
        <>
            <Container>
                <Header>
                    <h1>Escolha seu plano</h1>
                </Header>
                <div className="bottom">
                    {plans.map(value => <Plans id={value.id} image={value.image} price={value.price} />)}
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