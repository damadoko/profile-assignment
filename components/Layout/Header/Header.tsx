import React from 'react'
import styled from 'styled-components'
import {} from 'components/Layout/Header'

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
`

const Header: React.FC = () => {
  return <StyledHeader>/* Header */</StyledHeader>
}

export default Header
