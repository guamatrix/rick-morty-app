import { memo } from 'react'
import styled from 'styled-components'

import Search from '../Search'

const StyledHeader = styled.header`
  display: grid;
  grid-template-areas:
    'logo search filter';
  grid-template-columns: 0.2fr 0.5fr;
  background-color: black;
  color: #FFFFFF;
  grid-area: header;
  align-items: center;
`

const StyleLogo = styled.span`
  grid-area: logo;
`

const StyledSearch = styled.div`
  grid-area: search
`

const StyledFilter = styled.div`
  grid-area: filter
`

const Header = () => {
  return (
    <StyledHeader>
      <StyleLogo>The rick and morty app</StyleLogo>
      <StyledSearch><Search /></StyledSearch>
      <StyledFilter>Filter</StyledFilter>
    </StyledHeader>
  )
}

export default memo(Header)
