import styled from 'styled-components'
import Select, {SelectProps} from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'

const StyledSelect = styled(Select)`
  && {
    .MuiInputBase-input {
      color: #9fd8ff;
      background-color: rgba(159, 216, 255, 0.24);
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-left-radius: 5px;
      padding: 14px 16px 17px 16px;
    }
  }
`

const StyledDiv = styled.div`
  .input-wrapper {
    display: flex;
    align-items: center;
  }
  .input-action {
    flex: 1;
    background-color: rgba(159, 216, 255, 0.24);
    height: 100%;
    padding: 14px 11px 16px 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-decoration: underline;
  }
`

const CDropdown: React.FC<SelectProps> = ({label, ...rest}) => {
  return (
    <StyledDiv>
      <Box component="label" color="rgba(159, 216, 255, 0.36)">
        {label}
      </Box>

      <StyledSelect {...rest}>
        <option aria-label="None" value={0} />
        <option value={1}>Singapore</option>
      </StyledSelect>
    </StyledDiv>
  )
}

export default CDropdown
