import * as S from './styles'

// Types
import { ReactNode } from 'react'
import { useAppTheme } from 'contexts/AppThemeContext'

// Components
import Button from 'components/shared/Button'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.jpg'
import NavBar from 'components/shared/NavBar'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useAppTheme()

  return (
    <S.Wrapper>
      <S.Header>
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <NavBar />
        <Button
          onClick={theme.themeToggle}
          variant={theme.name === 'dark' ? 'basic' : 'filled'}
          color={theme.name === 'dark' ? 'secondary' : 'primary'}
          layer={2}
        >
          {theme.title} {theme.icon}
        </Button>
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>
        <S.FooterContent>
          <S.ContactContainer>
            <S.Title>Contato</S.Title>
            <S.Items>(11) 94854-0659</S.Items>
            <S.Items>goncalvesegoncalves.advconjur@gmail.com</S.Items>
            <S.Link href="https://brasiladvogados.adv.br/willian-goncalves">
              https://brasiladvogados.adv.br/willian-goncalves
            </S.Link>
          </S.ContactContainer>
          <S.AddressContainer>
            <S.Title>Endereço</S.Title>
            <S.Items>Rua Vinte e Sete de Outubro, 401</S.Items>
            <S.Items>1º andar, sala 5</S.Items>
            <S.Items>Centro, Suzano - São Paulo</S.Items>
            <S.Items>08674-200</S.Items>
          </S.AddressContainer>
          <S.SocialContainer>
            <S.Title>Redes Sociais</S.Title>
          </S.SocialContainer>
        </S.FooterContent>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Layout
