import Container from 'components/shared/Container'
import About from 'components/views/About'
import Banner from '../../public/assets/bannerwill.png'
import Image from 'next/image'
import Areas from 'components/views/Areas'

const HomePage = () => {
  return (
    <div>
      <Image src={Banner} alt="Banner" />
      <Container>
        <About />
        <Areas />
      </Container>
    </div>
  )
}

export default HomePage
