// @flow
import * as React from 'react'
import { css } from 'emotion'
import { Flex, Text } from '../Components'

type Props = {
  children: string,
}
const Tag = ({ children }: Props) => {
  return (
    <Flex
      bg="lapisLazuliLight"
      className={css({
        borderRadius: 8,
      })}
      px={2}
      py={1}>
      <Text sans fontSize={10} fontWeight="600" color="white">
        {children}
      </Text>
    </Flex>
  )
}

export { Tag }
