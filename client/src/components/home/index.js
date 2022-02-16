import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import Slideshow from '../carousel';
import Navigator from '../navbar';
/* import {allProducts} from '../../redux/actions' */
import Footer from '../footer';
import CardCateServices from '../cardCateServices';
import Homeservices from '../homeservices'
let allProducts = require('../../datamock/Products.json')



function Home() {
  return (
    <div className='home'>
      <Navigator />
      <Slideshow />
      <Homeservices/>

      <h2>Products</h2>
    {/* COMENTO LO DE ABAJO HASTA QUE SE CREE LA RUTA DE PRODUCTOS ASI NO SE ROMPE LA PAGINA ENTERA */}

     {allProducts && allProducts.slice(0,5).map(c => {
      return (
        <Link key={c.id} to={'home/' + c.id}> {/* Cambio de c.code a c.id, ya que se cambio la propiedad en el objeto*/}
        <Card
        name={c.product_name}
        image={c.image}
        cost_by_unit={c.cost_by_unit}
        id={c.id}
        />
        </Link>
        )
      })
    }
      <Footer/>
    </div>
  )
}

export default Home;