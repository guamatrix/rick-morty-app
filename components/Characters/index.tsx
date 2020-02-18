import styled from 'styled-components'

import { Character } from '../../pages/api/character'

const StyledCharacterContainer = styled.div`
  display:flex;
  justify-content: center;
`

const StyledCharacterImg = styled.img`
  width: 150px;
  height: 100px
`

const StyledCharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`
interface CharactersProps {
  character: Character
}

const Characters = (props: CharactersProps) => {
  const { character } = props
  return (
    <StyledCharacterContainer>
      <StyledCharacterInfo>
        <span>Name: { character.name }</span>
        <span>Status: { character.status }</span>
        <span>Gender: { character.gender }</span>
      </StyledCharacterInfo>
      <StyledCharacterImg src={character.image} alt={character.name}/>
    </StyledCharacterContainer>
  )
}

export default Characters
