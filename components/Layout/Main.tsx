import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #CCCCCC;
  grid-area: main;
  overflow: auto;
`

const Main = (props: PropsWithChildren<{}>) => {
  const { children } = props
  return (
    <StyledMain>
        {children}
    </StyledMain>
  )
}

export default Main