import styled from 'styled-components'
import { layout, spacing } from 'styles/designSystemConfig'
import { screens } from 'styles/screens'

export const Wrapper = styled.div`
  padding-left: ${layout.gutter};
  padding-right: ${layout.gutter};

  display: flex;
  flex-direction: column;
  gap: ${spacing.sections.medium};

  ${screens.tabletS} {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  max-width: ${layout.containerMaxWidht};
  margin: 0 auto;
`
