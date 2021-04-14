import React from 'react'
import styled from 'styled-components'
import Header from 'components/Layout/Header'

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #e5e5e5;
`

const Layout: React.FC = ({children}) => {
  return (
    <StyledLayout>
      <Header />

      <main>{children}</main>
    </StyledLayout>
  )
}

export default Layout
