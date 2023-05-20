import { Button, Container, List } from '@mui/material'
import React from 'react'
import CakeCard from './CakeCard/CakeCard'
import cakes from '../../../Data/Cakes'
import { ListContainer } from './CakeListStyle'

type CakeButtonProps = {
  name: string
}

const Cakelist: React.FC = () => {
   return (
    <ListContainer>
      {cakes.map(({name, smallCake, image}) => <CakeCard name={name} smallCake={smallCake} cakeImage={image} />)}
    </ListContainer>
  )
}

export default Cakelist