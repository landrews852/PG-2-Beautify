import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../card';
import Slideshow from '../carousel';
import Navigator from '../navbar';
import {allProducts} from '../../redux/actions'


function Home() {
  return (
    <div className='home'>
      <Navigator />
      <Slideshow />


    {/* COMENTO LO DE ABAJO HASTA QUE SE CREE LA RUTA DE PRODUCTOS ASI NO SE ROMPE LA PAGINA ENTERA */}

    {/*  {allProducts && allProducts.map(c => {
        return (
          <Link key={c.id} to={'home/' + c.id}>
            <Card
              name={c.name}
              image={c.image}
              cost_by_unit={c.cost_by_unit}
              id={c.id}
            />
          </Link>
        )
      })
      }
 */}
    </div>
  )
}

export default Home;