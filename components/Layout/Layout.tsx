import React from 'react'
import styled from 'styled-components'
import Header from 'components/Layout/_Header'

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #172038;

  > main {
    flex-grow: 1;
    width: 100%;
  }

  header {
    flex-grow: 0;
  }
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
