import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from "../../redux/actions";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Card from '../card';

export default function HomeProducts  () {
    
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(allProducts());
    },[]);  
       
    const product = useSelector((state) => state.products);
    return (
      <>
      {  
        <OwlCarousel loop margin={10} nav>
            {product &&
        product.map((p) => (
          <Link key={p.id} to={"/market/" + p.id}>
          <div class='item'>
              <Card
            product_name={p.product_name}
            image={p.image}
            cost_by_unit={p.cost_by_unit}
          />
          </div>
          </Link>
        ))}          
        </OwlCarousel>
}
</>
          

    )
}
