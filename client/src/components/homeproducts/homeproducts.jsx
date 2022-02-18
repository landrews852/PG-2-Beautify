import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from '../card';

export default function HomeProducts  () {
    
    const dispatch = useDispatch();
    let product = useSelector((state) => state.products);
    useEffect(() => {
      dispatch(allProducts());
    }, [dispatch]);

    return (
        <section>
        {product &&
            product.slice(0, 5).map((c) => {
              return (
                <Link key={c.id} to={"market/" + c.id}>
                  {" "}
                  {/* Cambio de c.code a c.id, ya que se cambio la propiedad en el objeto*/}
                  <Card
                    name={c.product_name}
                    image={c.image}
                    cost_by_unit={c.cost_by_unit}
                    id={c.id}
                  />
                </Link>
              );
            })}
        </section>    

    )
}