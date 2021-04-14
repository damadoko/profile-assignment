import React, {ReactElement} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'

interface ITabsWrapper {
  tabsData: {
    label: string
    icon: ReactElement
  }[]
}

const StyledDiv = styled.div`
  border-bottom: 1px solid #6389af;
  background-color: #1f2744;
  border-radius: 10px;
`

const TabsWrapper: React.FC<ITabsWrapper> = ({tabsData, children}) => {
  const tabs = tabsData.map(({label, icon}, index) => (
    <Box display="flex" mx="14px" key={index}>
      {icon}
      <Box ml="16px">{label}</Box>
    </Box>
  ))

  return (
    <StyledDiv>
      <Box clone borderBottom="9px solid #6389AF">
        <Tabs indicatorColor="primary" value={0}>
          {tabs.map((tab, index) => (
            <Box clone mr="55px" key={index}>
              <Tab label={tab} />
            </Box>
          ))}
        </Tabs>
      </Box>

      <section>{children}</section>
    </StyledDiv>
  )
}

export default TabsWrapper
