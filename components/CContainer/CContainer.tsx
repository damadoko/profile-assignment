import React from 'react'
import styled, {css} from 'styled-components'
import Container, {ContainerProps} from '@material-ui/core/Container'

interface ICContainer extends ContainerProps {
  variant?: 'mainContent'
}

const StyledContainer = styled(Container)<ICContainer>`
  && {
    ${(props) =>
      props.variant === 'mainContent' &&
      css`
        margin-top: 43px;
      `}

    padding-left: 16px;
    padding-right: 16px;

    @media (min-width: 1280px) {
      max-width: 1006px;
      padding-left: 0;
      padding-right: 0;
    }
  }
`

const CContainer: React.FC<ICContainer> = ({children, ...rest}) => {
  return (
    <StyledContainer disableGutters={true} {...rest}>
      {children}
    </StyledContainer>
  )
}

export default CContainer
