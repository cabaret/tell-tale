// @flow
import * as React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import moment from 'moment'
import { Flex, Text, TaleTitle, Absolute, Box, Body } from '../Components'
import { Tag } from './Tag'
import type { Tale } from 'tell-tale'

const AvatarCircle = styled(Box)(
  {
    height: 30,
    width: 30,
    borderRadius: 32 * 0.5,
    border: 'white 1px solid',
  },
  ({ index }) => ({
    transform: `translateX(${32 * 0.5 * index}px)`,
  }),
)

type Props = {
  tale: Tale,
  height?: number,
}
export const TaleSummary = ({ tale, height = 256 }: Props) => {
  return (
    <Flex flexDirection="column" position="relative" bg="white">
      <Flex px={5} py={3}>
        <TaleTitle>{tale.title}</TaleTitle>
      </Flex>
      <Flex
        flexDirection="column"
        flex={1}
        maxHeight={height}
        className={css({
          overflow: 'hidden',
        })}>
        {tale.description ? (
          <Box px={5} pt={2}>
            <Body>{tale.description}</Body>
          </Box>
        ) : (
          tale.paragraphs.map(({ body }, i) => (
            <Box px={5} pt={2}>
              <Body>{body}</Body>
            </Box>
          ))
        )}
      </Flex>
      <Flex px={5} height={64} justifyContent="space-between">
        <Flex alignItems="center">
          {tale.tags ? (
            tale.tags.map(({ label }) => (
              <Flex mr={1}>
                <Tag>{label}</Tag>
              </Flex>
            ))
          ) : (
            <Text color="lapisLazuliLight">No tags selected</Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
