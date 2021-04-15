import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import CInput from 'components/CInput'
import CDropdown from 'components/CDropdown'

const StyledDiv = styled.div`
  && {
    padding: 12px 25px;
    background-color: #172038;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.13);
    border-radius: 5px;

    .user-avatar__wrapper {
      margin-top: 18px;
      margin-bottom: 23px;
    }
  }
`
const CommunicationDetail: React.FC = () => {
  return (
    <StyledDiv>
      <Box component="p" fontWeight="600">
        Communication Details
      </Box>
      <Box mb="16px">
        <CInput label="Mobile Number" value="*********98765" isVerifyInput={true} fullWidth />
      </Box>
      <CDropdown label="Language" value={1} variant="outlined" fullWidth />
    </StyledDiv>
  )
}

export default CommunicationDetail
