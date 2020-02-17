import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  background-color: gray;
  grid-area: footer
`

const Footer = () => {
  return (
    <StyledFooter>
      <span>@Guamadev</span>
    </StyledFooter>
  )
}

export default Footer