import CardAreas from 'components/shared/CardAreas'
import * as S from './styles'

export type AreasProps = {}

const Areas = ({}: AreasProps) => {
  return (
    <S.Wrapper>
      <S.Title>Áreas de Atuação</S.Title>
      <S.Content>
        <CardAreas />
      </S.Content>
    </S.Wrapper>
  )
}

export default Areas
