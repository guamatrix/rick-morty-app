import { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../Provider'

const StyledFooter = styled.footer`
  display: flex;
  background-color: gray;
  grid-area: footer;
  justify-content: space-between;
  align-items: center;
`

const StyledButtonPage = styled.button`
  height: 100%;
  width 60px;
`

const Footer = () => {
  const { paginationState, goToPage } = useContext(Context)
  
  const hanlderGotoPage = (url: string) => () => {
    goToPage(url)
  }

  return (
    <StyledFooter>
      { paginationState.prev && <StyledButtonPage onClick={hanlderGotoPage(paginationState.prev)}>Prev</StyledButtonPage>}
        <span>@Guamadev</span>
      {paginationState.next && <StyledButtonPage onClick={hanlderGotoPage(paginationState.next)}>Next</StyledButtonPage>}
    </StyledFooter>
  )
}

export default Footer