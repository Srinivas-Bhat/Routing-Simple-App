import React, { useEffect, useState } from 'react'
import Table from './Table';

const Products = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        const productsFetch = async() => {
            let r = await fetch('http://localhost:8080/products')
            let d = await r.json();
            setItems(d); 
        };
        productsFetch();
    }, []);
  return (
    <div>Products : 
        <table className="tabledata">
            <thead>
                <th >Product Name</th>
                <th >Price</th>
                <th >More</th>
            </thead>
            {items.map((el) => (
                <tbody key={el.id}><Table name={el.name} price={el.price} id={el.id} /></tbody>
            ))}
        </table>
    </div>
  )
}

export default Products