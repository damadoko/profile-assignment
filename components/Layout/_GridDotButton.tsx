import React from 'react'
import styled from 'styled-components'
import Button, {ButtonProps} from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  && {
    min-width: 48px;
    height: 36px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(159, 216, 255, 0.33);

    .dot__wrapper {
      display: grid;
      grid-template-columns: auto auto auto;
      padding: 1px;
    }

    .dot__item {
      width: 6px;
      height: 6px;
      background-color: #9fd8ff;
      border-radius: 50%;
    }
  }
`

const GridDotButton: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      <div className="dot__wrapper">
        {Array.from(new Array(9)).map((_, index) => (
          <div key={index} className="dot__item" />
        ))}
      </div>
    </StyledButton>
  )
}

export default GridDotButton
