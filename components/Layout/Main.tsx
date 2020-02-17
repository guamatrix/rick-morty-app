import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CCCCCC;
  grid-area: main
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