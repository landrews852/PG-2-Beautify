import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import Slideshow from '../carousel';
import Navigator from '../navbar';
/* import {allProducts} from '../../redux/actions' */
import Footer from '../footer';
import CardCateServices from '../cardCateServices';
let services = require('../../datamock/Services.json')
let allProducts = require('../../datamock/Products.json')



function Home() {
  return (
    <div className='home'>
      <Navigator />
      <Slideshow />
      {
        services && services.slice(0,3).map (e =>(
          <Link key={e.id_service} to ={'home/service'+ e.id_service}>
            <CardCateServices
            img= {e.image}
            servicio={e.category}
            />
          </Link>
        ))
      }

    {/* COMENTO LO DE ABAJO HASTA QUE SE CREE LA RUTA DE PRODUCTOS ASI NO SE ROMPE LA PAGINA ENTERA */}

     {allProducts && allProducts.map(c => {
      return (
        <Link key={c.code} to={'home/' + c.code}>
        <Card
        name={c.product_name}
        image={c.image}
        cost_by_unit={c.cost_by_unit}
        id={c.code}
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