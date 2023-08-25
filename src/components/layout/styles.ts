import styled from 'styled-components'
import { font, spacing } from 'styles/designSystemConfig'

export const Link = styled.a`
  font-size: ${font.sizes.small};
`

export const Items = styled.span`
  font-size: ${font.sizes.small};
`

export const Title = styled.span`
  font-size: ${font.sizes.large};
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: ${spacing.sections.larger};
`

export const Footer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.layers[1].background};
  border-top: 1px solid ${props => props.theme.colors.layers[1].border};
`

export const Main = styled.main`
  flex: 1;
  padding-top: 95px;
`

export const Header = styled.header`
  padding: 1.4rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  color: ${props => props.theme.colors.title};
  background-color: ${props => props.theme.colors.layers[1].background};
  border-bottom: 1px solid ${props => props.theme.colors.layers[1].border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${props => props.theme.colors.layers[0].background};
`
