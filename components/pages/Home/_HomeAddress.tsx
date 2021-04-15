import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import CInput from 'components/CInput'

const StyledContainer = styled(Container)`
  && {
    padding: 12px 25px;
    background-color: #172038;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.13);
    border-radius: 5px;

    .account-info__label {
      font-size: 18px;
    }

    .account-info__value {
      > span {
        margin-right: 30px;
      }
    }
  }
`

export const HomeAddress: React.FC = () => {
  return (
    <StyledContainer>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={6}>
          <Box component="p" fontWeight="600">
            Home Address
          </Box>
          <CInput label="Address" value="Address" multiline rows={2} rowsMax={4} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <Box mb="16px">
            <CInput label="Town/City" value="Town/City" fullWidth />
          </Box>
          <Box mb="16px">
            <CInput label="Postal Code" value="00000" fullWidth />
          </Box>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}

export default HomeAddress
