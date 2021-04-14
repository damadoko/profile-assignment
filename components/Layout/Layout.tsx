import React from 'react'
import styled from 'styled-components'
import Header from 'components/Layout/_Header'

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;

  background-color: #1f2744;
`
const Layout: React.FC = ({children}) => {
  return (
    <StyledDiv>
      <Header />

      <main>{children}</main>
    </StyledDiv>
  )
}

export default Layout
