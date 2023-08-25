import Trabalhista from '../../../../public/assets/trabalhista.jpg'
import Civil from '../../../../public/assets/codigocivil.jpg'
import Previdenciaria from '../../../../public/assets/previdenciaria.png'
import Criminal from '../../../../public/assets/criminal.jpg'

const CardItems = [
  {
    image: Civil,
    title: 'Cívil',
    description:
      'Este ramo do direito regula as relações privadas entre cidadãos, abordando assuntos como contratos, propriedade, família e responsabilidades civis decorrentes de atos ilícitos.'
  },
  {
    image: Criminal,
    title: 'Direito Criminal',
    description:
      'Dedica-se a definir o que constitui um crime e estabelecer as respectivas penalidades. Envolve a acusação, defesa e julgamento de indivíduos acusados de cometer delitos.'
  },
  {
    image: Trabalhista,
    title: 'Trabalhista',
    description:
      'Centra-se nas relações de trabalho, assegurando os direitos dos trabalhadores e regulando disputas entre empregados e empregadores sobre questões como remuneração, condições de trabalho e demissões.'
  },
  {
    image: Previdenciaria,
    title: 'Previdenciária',
    description:
      'Foca nas questões relativas à Previdência Social, como a concessão de aposentadorias, pensões e benefícios pelo governo, bem como as contribuições dos trabalhadores para esse sistema.'
  }
]

export default CardItems
