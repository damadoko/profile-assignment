import React from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'

import CContainer from 'components/CContainer'
import TabsWrapper from 'components/pages/Home/TabsWrapper'
import AccountIcon from 'public/icons/AccountIcon'
import BankIcon from 'public/icons/BankIcon'
import EmailIcon from 'public/icons/EmailIcon'
import UserAvatar from 'components/pages/Home/_UserAvatar'
import CommunicationDetails from 'components/pages/Home/_CommunicationDetails'

const StyledDiv = styled.div`
  background-color: #1f2744;
  border-radius: 0 0 10px 10px;
  padding: 0 45px;
`

const Home: React.FC = () => {
  const tabsData = [
    {label: 'Account Profile', icon: <AccountIcon />},
    {label: 'Update Bank Detail', icon: <BankIcon />},
    {label: 'Inbox', icon: <EmailIcon />},
  ]

  return (
    <CContainer variant="mainContent">
      <TabsWrapper tabsData={tabsData}>
        <StyledDiv>
          <Grid container spacing={2}>
            <Grid container item xs={6} spacing={3}>
              <Grid item xs={12}>
                <UserAvatar />
              </Grid>
              <Grid item xs={12}>
                <CommunicationDetails />
              </Grid>
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
      </TabsWrapper>
    </CContainer>
  )
}

export default Home
