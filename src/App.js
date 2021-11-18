import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import devices from './config/devices'
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(()=>{
    axios.get('http://hp-api.herokuapp.com/api/characters').then(res => {
      setCharacters(res.data)
    })
  }, [])

  return (
    <Container> 
      {characters.map(chara => <Image src={chara.image}></Image>)}
      <Navigation>Barre de navigation</Navigation>
    </Container>
  );
}

const Navigation = styled.p`

  background-color:red;
`

const Image = styled.img`
  margin-bottom: 12px;
  border-radius: 50%;
  width: 100%;
  @media ${devices.tablet} {
    /* width: 400px;
    height: 400px; */
  }
`

const Container = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  align-items: center;
  @media ${devices.tablet} {
    background-color: green;
  }
  @media ${devices.laptop} {
    flex-direction: column-reverse;
    /* width: 400px;
    height: 400px; */
  }
`

export default App;
