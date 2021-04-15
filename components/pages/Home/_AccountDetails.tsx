import {ReactElement} from 'react'
import styled, {css} from 'styled-components'
import Box from '@material-ui/core/Box'

import LockIcon from 'public/icons/LockIcon'
import DropdownIcon from 'public/icons/DropdownIcon'

interface ICustomDiv {
  bgColor: string
}

const StyledDiv = styled.div<ICustomDiv>`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 11px 17px 11px;
    /* background-color: rgba(159, 216, 255, 0.24); */
    border-radius: 5px;

    ${(props) =>
      !!props.bgColor.length &&
      css`
        background-color: ${props.bgColor};
      `}

    .account-info__label {
      min-width: 160px;
      font-size: 18px;
      display: flex;
      justify-content: space-between;
    }
    .link {
      text-decoration: underline;
    }
  }
`
interface IAccountInfo extends Partial<ICustomDiv> {
  label: string
  value: string | ReactElement
  icon?: ReactElement | null
}

export const AccountInfo: React.FC<IAccountInfo> = ({label, value, icon, bgColor = ''}) => {
  return (
    <StyledDiv bgColor={bgColor}>
      <div className="account-info__label">
        <span>{label}</span>
        <span>:</span>
      </div>
      <div className="account-info__value">{value}</div>
      <div className="account-info__icon">{icon ?? ''}</div>
    </StyledDiv>
  )
}

const accountDetails = [
  {
    label: 'Username',
    value: 'howdycandidate',
    icon: <LockIcon />,
  },
  {
    label: 'First Name',
    value: 'howdycandidate',
    icon: <LockIcon />,
  },
  {
    label: 'Date of Birth',
    value: '12/10/1999',
    icon: <LockIcon />,
  },
  {
    label: 'Password',
    value: 'Change Password',
    icon: null,
  },
  {
    label: 'Country',
    value: 'Chile',
    icon: <LockIcon />,
  },
  {
    label: 'Currency',
    value: 'THB',
    icon: <LockIcon />,
  },
  {
    label: 'Last Name',
    value: 'pewpew',
    icon: <LockIcon />,
  },
  {
    label: 'E-mail',
    value: 'email@example.com',
    icon: <LockIcon />,
  },
  {
    label: 'Gender',
    value: 'Male',
    icon: <DropdownIcon />,
  },
]

const AccountDetails: React.FC = () => {
  return (
    <div>
      <Box component="p" fontWeight="600" color="#6389AF">
        Account Details
      </Box>
      {accountDetails.map(({label, value, icon}, index) => (
        <AccountInfo
          key={index}
          label={label}
          value={value === 'Change Password' ? <div className="link">{value}</div> : value}
          icon={icon}
          bgColor={index % 2 ? '' : 'rgba(159, 216, 255, 0.24)'}
        />
      ))}
    </div>
  )
}

export default AccountDetails
