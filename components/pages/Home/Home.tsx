import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

import CContainer from 'components/CContainer'

const StyledDiv = styled.div`
  background-color: #1f2744;
  border-radius: 10px;
  padding: 40px 45px;
`

const Home: React.FC = () => {
  return (
    <CContainer variant="mainContent">
      <StyledDiv>
        <Grid container spacing={2}>
          <Grid container item xs={6}>
            <Grid item>HowDyCandidate</Grid>
            <Grid item>Comunication details</Grid>
          </Grid>

          <Grid item xs={6}>
            account details
          </Grid>

          <Grid container item xs={12}>
            Home Address
            <Grid item xs={6}>
              address
            </Grid>
            <Grid item xs={6}>
              Town City + Postal code
            </Grid>
          </Grid>
        </Grid>
      </StyledDiv>
    </CContainer>
  )
}

export default Home
