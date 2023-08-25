import styled from 'styled-components'
import { borderRadius, font, spacing } from 'styles/designSystemConfig'

export const Description = styled.span`
  font-size: ${font.sizes.small};
`

export const Title = styled.h2`
  font-size: ${font.sizes.large};
  font-weight: ${font.weight.semibold};
`

export const ContainerTitle = styled.div`
  padding: ${spacing.components.medium};

  display: flex;
  flex-direction: column;
  gap: ${spacing.components.medium};
`

export const ContainerImage = styled.div`
  width: 100%;
  overflow: hidden;

  border-top-left-radius: ${borderRadius.medium};
  border-top-right-radius: ${borderRadius.medium};
`

export const Container = styled.div`
  width: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: ${borderRadius.medium};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${spacing.components.larger};
`
