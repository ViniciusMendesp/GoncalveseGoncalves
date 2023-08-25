import * as S from './styles'
import CardItems from './config'
import Image from 'next/image'

export type CardAreasProps = {}

const CardAreas = ({}: CardAreasProps) => {
  return (
    <S.Wrapper>
      {CardItems.map(item => (
        <S.Container key={item.title}>
          <S.ContainerImage>
            <Image src={item.image} alt={item.title} width={300} height={205} />
          </S.ContainerImage>
          <S.ContainerTitle>
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.description}</S.Description>
          </S.ContainerTitle>
        </S.Container>
      ))}
    </S.Wrapper>
  )
}

export default CardAreas
