import React from 'react';
import Card from '../card';
import './market.css'
let allProducts = require('../../datamock/Products.json')

export default function Market () {
    
   
    
    return (
        <div className="Container Market">
            {
                allProducts&&allProducts.map(p => <Card product_name={p.product_name} />)
            }
        </div>
    )
}