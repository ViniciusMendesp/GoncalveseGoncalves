import styled from 'styled-components'
import { font, spacing } from 'styles/designSystemConfig'

export const Content = styled.div``

export const Title = styled.h1`
  font-size: ${font.sizes.xxlarger};
  font-weight: ${font.weight.bold};
  margin-bottom: ${spacing.sections.small};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
