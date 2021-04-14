import styled from 'styled-components'
import Image from 'next/image'

const StyledDiv = styled.div`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1f2744;
    box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.13);
    border-radius: 5px;

    .user-avatar__wrapper {
      margin-top: 18px;
      margin-bottom: 23px;
    }
  }
`
const UserAvatar: React.FC = () => {
  return (
    <StyledDiv>
      <div className="user-avatar__wrapper">
        <Image src="/images/avatar.png" alt="Avatar" width={147} height={147} />
      </div>

      <p>Howdycandidate</p>
      <p>TBH 565.000</p>
    </StyledDiv>
  )
}

export default UserAvatar
