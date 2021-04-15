import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import CContainer from 'components/CContainer'
import CButton from 'components/CButton'
import TabsWrapper from 'components/pages/Home/TabsWrapper'
import AccountIcon from 'public/icons/AccountIcon'
import BankIcon from 'public/icons/BankIcon'
import EmailIcon from 'public/icons/EmailIcon'
import UserAvatar from 'components/pages/Home/_UserAvatar'
import CommunicationDetails from 'components/pages/Home/_CommunicationDetails'
import AccountDetails from 'components/pages/Home/_AccountDetails'
import HomeAddress from 'components/pages/Home/_HomeAddress'

const StyledDiv = styled.div`
  background-color: #1f2744;
  border-radius: 0 0 10px 10px;
  padding: 0 45px 40px 45px;
`

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false)

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
            <Grid container item xs={12} md={6} spacing={3}>
              <Grid item xs={12}>
                <UserAvatar />
              </Grid>
              <Grid item xs={12}>
                <CommunicationDetails />
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <AccountDetails />
            </Grid>

            <HomeAddress />

            <Grid item xs={12}>
              <Box component="p" textAlign="center">
                Would you like to get the latest promos, updates, and offers?
              </Box>

              <FormGroup>
                <Box textAlign="center" fontWeight={400}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agreement"
                        checked={checked}
                        onChange={() => setChecked((prev) => !prev)}
                        inputProps={{'aria-label': 'primary checkbox'}}
                      />
                    }
                    label="Yes. Send me the latest promotions, updates and offers."
                  />
                </Box>
              </FormGroup>
            </Grid>

            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Box mr="18px">
                  <CButton customColor="#42AFF9" customWidth={176} variant="contained">
                    Save Change
                  </CButton>
                </Box>
                <CButton customColor="#F94263" customWidth={157} variant="contained">
                  Cancel
                </CButton>
              </Box>
            </Grid>
          </Grid>
        </StyledDiv>
      </TabsWrapper>
    </CContainer>
  )
}

export default Home
