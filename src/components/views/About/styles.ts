import styled from 'styled-components'
import { font, spacing } from 'styles/designSystemConfig'

export const ContainerImage = styled.div`
  -webkit-box-shadow: 30px -13px 2px -6px rgba(98, 98, 98, 1);
  -moz-box-shadow: 30px -13px 2px -6px rgba(98, 98, 98, 1);
  box-shadow: 30px -13px 2px -6px rgba(98, 98, 98, 1);
`

export const Text = styled.span`
  font-size: ${font.sizes.default};
`

export const TitleText = styled.span`
  font-size: ${font.sizes.large};
  font-weight: ${font.weight.bold};
`

export const ContainerText = styled.div`
  width: 450px;

  display: flex;
  flex-direction: column;
  gap: ${spacing.components.medium};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.sections.larger};
  gap: ${spacing.sections.larger};
`

export const Title = styled.h1`
  font-size: ${font.sizes.xxlarger};
  font-weight: ${font.weight.bold};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${spacing.sections.large};
`
