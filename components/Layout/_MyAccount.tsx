import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import ExpandMoreIcon from 'public/icons/ExpandMoreIcon'

const StyledDiv = styled.div`
  && {
    display: flex;
    align-items: center;

    .account__avatar {
      margin-right: 9px;
    }
  }
`
const MyAccount: React.FC = () => {
  return (
    <StyledDiv>
      <div className="account__avatar">
        <Image src="/images/avatarIcon.png" alt="Avatar" width={45} height={45} />
      </div>

      <div>Howdy...</div>
      <ExpandMoreIcon />
    </StyledDiv>
  )
}

export default MyAccount
