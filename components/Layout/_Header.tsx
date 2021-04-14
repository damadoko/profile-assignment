import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import CContainer from 'components/CContainer'
import GridDotButton from 'components/Layout/_GridDotButton'
import MyAccount from 'components/Layout/_MyAccount'

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #6389af;

  .header__wrapper {
    margin-top: 28px;
  }

  .header__wrapper--left {
    display: flex;
    align-items: center;

    button {
      margin-right: 11px;
    }
  }
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <CContainer>
        <Grid className="header__wrapper" container justify="space-between" alignItems="center">
          <Grid item className="header__wrapper--left">
            <GridDotButton />
            All Services
          </Grid>
          <Grid item>
            <MyAccount />
          </Grid>
        </Grid>
      </CContainer>
    </StyledHeader>
  )
}

export default Header
