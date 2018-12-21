// @flow
import styled from '@emotion/styled'
import withProps from 'recompose/withProps'
import { color } from 'styled-system'
import { layout, position, flexBox } from './styles'

export const Box = styled('div')(layout, position, color)
export const Flex = styled(Box)({ display: 'flex' }, flexBox)

export const Absolute = withProps({ position: 'absolute' })(Box)

export const Grid = withProps(({ gutter }) => ({ mx: -gutter || -6 }))(Box)
export const Col = withProps(({ gutter }) => ({ px: gutter || 6 }))(
  styled(Box)({ display: 'inline-block' }),
)

export const ScrollView = styled(Box)(
  ({ horizontal }) => {
    if (horizontal) return { overflowX: 'auto' }
    return { overflowY: 'auto', overflowX: 'hidden' }
  },
  ({ theme }) => ({
    '&::-webkit-scrollbar': {
      backgroundColor: 'transparent',
      width: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.charlestonGreen,
      borderRadius: 4,
    },
  }),
)
