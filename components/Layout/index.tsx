import { PropsWithChildren } from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'
import Main  from './Main'
import ProviderComponent from '../Provider'

const StyledLayout = styled.div`
min-height: 100vh;
display: grid;
grid-template-areas: 
    'header'
    'main'
    'footer';    
grid-template-rows: 50px 1fr 50px;
`

const Layout = (props: PropsWithChildren<{}>) => {
  const { children } = props
    return (
      <ProviderComponent>
        <StyledLayout>
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </StyledLayout>
      </ProviderComponent>
    )
}

export default Layout
