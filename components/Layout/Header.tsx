import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  background-color: black;
  color: #FFFFFF;
  grid-area: header
`

const Header = () => {
  return (
    <StyledHeader>
      <span>The rick and morty app</span>
    </StyledHeader>
  )
}

export default Header
