import redVelvetImage from '../images/bolo_red-velvet.jpeg'
import chocoliteImage from '../images/exemplo_bolo_chocolate.jpeg'
import cenouraImage from '../images/bolo_de_cenoura.jpeg'

type CakeProps = {
  name: string
  smallCake: number| null
  averageCake: number | null
  image: string | null
  description?: string
}

const cakes: CakeProps[] = [
  {
    name: 'Bolo de chocolate recheado',
    smallCake: 39.99,
    averageCake: null,
    image: chocoliteImage,
  },
  {
    name: 'Bolo Red Velvet',
    smallCake: 44.99,
    averageCake: null,
    image: redVelvetImage,
  },
  {
    name: 'Bolo de cenoura com cobertura  e recheio de chocolate',
    smallCake: 39.99,
    averageCake: 49.99,
    image: cenouraImage,
  }
]

export default cakes