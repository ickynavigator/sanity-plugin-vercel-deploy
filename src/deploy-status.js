import React from 'react'
import { Flex, Box } from '@sanity/ui'

import styles from './deploy-status.css'

const DeployStatus = ({ status, children }) => {
  return (
    <Flex
      wrap="nowrap"
      align="center"
      className={styles.hookStatusIndicator}
      data-indicator={status}
    >
      <Box marginX={2}>{titleCase(status)}</Box>
      {children}
    </Flex>
  )
}

const titleCase = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export default DeployStatus
