import Image from 'next/image'
import * as S from './styles'

import Justica from '../../../../public/assets/justica.png'

export type AboutProps = {}

const About = ({}: AboutProps) => {
  return (
    <S.Wrapper>
      <S.Title>Sobre nos</S.Title>

      <S.Content>
        <S.ContainerText>
          <S.TitleText>Gonçalves & Gonçalves</S.TitleText>
          <S.Text>
            Advocacia e Consultoria Jurídica, escritório fundado pelos advogados
            e irmãos, Juliana de Sousa Gonçalves e Willian de Sousa Gonçalves,
            em 11/08/2020, com vasta experiência e conhecimento, atendemos todos
            os tipos de demanda judicial, desde um simples aconselhamento até a
            representação legal perante a justiça. Estamos preparados para
            solucionar as mais diversas problemáticas.
          </S.Text>
        </S.ContainerText>

        <S.ContainerImage>
          <Image src={Justica} alt="Justiça" />
        </S.ContainerImage>
      </S.Content>
    </S.Wrapper>
  )
}

export default About
