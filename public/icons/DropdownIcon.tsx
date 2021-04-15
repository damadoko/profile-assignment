import React from 'react'
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon'

const ExpandMoreIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon viewBox={'0 0 19 12'} {...props}>
<path d="M10.1109 11.1883L18.7471 2.09741C19.0844 1.74244 19.0844 1.1668 18.747 0.811775C18.4097 0.456805 17.8629 0.456805 17.5257 0.811835L9.50018 9.25989L1.47429 0.811774C1.13702 0.456804 0.590221 0.456804 0.252943 0.811835C0.0843029 0.989289 1.14136e-05 1.22196 1.14031e-05 1.45462C1.13926e-05 1.68729 0.0843028 1.91996 0.253 2.09747L8.88959 11.1883C9.05155 11.3589 9.2712 11.4546 9.50024 11.4546C9.72928 11.4546 9.94898 11.3589 10.1109 11.1883Z" fill="#A1D6FA"/>
    </SvgIcon>
  )
}

export default ExpandMoreIcon