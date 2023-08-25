import * as S from './styles'
import Items from './config'

export type NavBarProps = {}

const NavBar = ({}: NavBarProps) => {
  return (
    <S.Wrapper>
      {Items.map((item, index) => (
        <S.NavItem
          key={index}
          href={`#${item.title.toLowerCase().replace(' ', '-')}`}
        >
          {item.title}
        </S.NavItem>
      ))}
    </S.Wrapper>
  )
}

export default NavBar
