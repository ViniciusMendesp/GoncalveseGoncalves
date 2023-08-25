import styled from 'styled-components'

export const NavItem = styled.a`
  color: black;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
