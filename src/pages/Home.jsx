import React from 'react'
import Banniere from './Banniere/Banniere';
import Projets from './Projets/Projets';
import Produits from './Produits/Produits';

const Home = () => {
  return (
    <div>
      <Banniere/>
      <Produits/>
      <Projets/>
    </div>
  )
}

export default Home

