import { useContext, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { API } from '../commons'
import character, { CharactersList } from './api/character'
import Characters from '../components/Characters'
import { Context } from '../components/Provider'

const StyledCharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`

interface HomeProps {
  data: CharactersList
}

const Home = (props: HomeProps) => {
  const { data } = props
  const { setCharacterState, characterState } = useContext(Context)

  useEffect(() => {
    setCharacterState(data)
  }, [])

  const characters = () => {
    return characterState.map(character => (<Characters key={character.id} character={character} />)) 
  }

  return (
    <>
      <h1>Rick and Morty characters</h1>
      <StyledCharactersContainer>
        {characters()}
      </StyledCharactersContainer>
    </>
  )
}

Home.getInitialProps = async () => {
  try {
    const  { data } =  await axios.get(API.BASE.characters)
    return { data }
  } catch (error) {
    console.log(error)
  }
}

export default Home
