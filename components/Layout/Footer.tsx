import { useContext, memo } from 'react'
import styled from 'styled-components'
import { Context } from '../Provider'

const StyledFooter = styled.footer`
  display: grid;
  background-color: gray;
  grid-area: footer;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 0.8fr 0.2fr;
  
  div {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

const StyledButtonPage = styled.button`
  width 60px;
  height: inherit;
`

const Footer = () => {
  const { paginationState, goToPage } = useContext(Context)
  
  const hanlderGotoPage = (url: string) => () => {
    goToPage(url)
  }

  return (
    <StyledFooter>
      <span>@Guamadev</span>
      <div>
        { paginationState.prev && <StyledButtonPage onClick={hanlderGotoPage(paginationState.prev)}>Prev</StyledButtonPage> }
        { paginationState.next && <StyledButtonPage onClick={hanlderGotoPage(paginationState.next)}>Next</StyledButtonPage> }
      </div>
    </StyledFooter>
  )
}

export default memo(Footer)