import React from 'react'
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon'

const ExpandMoreIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 10 6'} {...props}>
      <path
        d="M4.29289 4.79289L1.20711 1.70711C0.577142 1.07714 1.02331 0 1.91421 0H8.08579C8.97669 0 9.42286 1.07714 8.79289 1.70711L5.70711 4.79289C5.31658 5.18342 4.68342 5.18342 4.29289 4.79289Z"
        fill="#A1D6FA"
      />
    </SvgIcon>
  )
}

export default ExpandMoreIcon
