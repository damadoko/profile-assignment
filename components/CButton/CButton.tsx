import styled, {css} from 'styled-components'
import Button, {ButtonProps} from '@material-ui/core/Button'
/* ${({ customWidth }) =>
    customWidth &&
    css`
      width: `${customwidth}px`;
  `} */
interface ICustomButton {
  customWidth?: number
  customColor?: string
}

const StyledButton = styled(Button)<ICustomButton>`
  && {
    ${({customWidth}) =>
      !!customWidth &&
      css`
        width: ${customWidth}px;
      `}

    ${({customColor = '#000'}) =>
      !!customColor &&
      css`
        background-color: ${customColor};
      `}

    .MuiButton-label {
      color: #fff;
    }
  }
`

interface IProps extends ICustomButton, ButtonProps {}

const CButton: React.FC<IProps> = ({children, ...rest}) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default CButton
