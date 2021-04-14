import React from 'react'
import styled from 'styled-components'
import Container, {ContainerProps} from '@material-ui/core/Container'

const StyledContainer = styled(Container)`
  min-width: 1006px;
  min-height: 100vh;
`

const CContainer: React.FC<ContainerProps> = ({children, ...rest}) => {
  return (
    <StyledContainer disableGutters={true} {...rest}>
      {children}
    </StyledContainer>
  )
}

export default CContainer
