import React from 'react'
import {AppProps} from 'next/app'
import Head from 'next/head'

import {StylesProvider} from '@material-ui/core/styles'
import GlobalStyle from 'styles/globalStyle'
import Layout from 'components/Layout'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Fetch Assignment</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {/* <link rel="preload" href="/public/fonts/Mulist/Mulist-Black.ttf" as="font" crossOrigin="" /> */}
      </Head>
      <Layout>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <Component {...pageProps} />
        </StylesProvider>
      </Layout>
    </>
  )
}

export default MyApp
