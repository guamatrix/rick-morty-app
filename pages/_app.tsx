import { FC } from 'react'
import { AppProps, AppInitialProps } from 'next/app'
import Layout from '../components/Layout'
 
const App: FC<AppProps<AppInitialProps>> = (props) => {
  const { Component, pageProps } = props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
