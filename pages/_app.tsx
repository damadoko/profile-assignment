import React from 'react'
import {AppProps} from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/globalStyle'
import Layout from 'components/Layout'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Fetch Assignment</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
