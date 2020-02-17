import { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../Provider'

const StyledFooter = styled.footer`
  display: flex;
  background-color: gray;
  grid-area: footer;
  justify-content: space-between;
`

const Footer = () => {
  const { paginationState, goToPage } = useContext(Context)
  
  const hanlderGotoPage = (url: string) => () => {
    goToPage(url)
  }

  return (
    <StyledFooter>
      { paginationState.prev && <button onClick={hanlderGotoPage(paginationState.prev)}>Prev</button>}
        <span>@Guamadev</span>
      {paginationState.next && <button onClick={hanlderGotoPage(paginationState.next)}>Next</button>}
    </StyledFooter>
  )
}

export default Footer