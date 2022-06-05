import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import Products from './Products';

const Details = () => {

   
    // console.log(id)
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const{id} = useParams();

    useEffect(() => {
        if(id) {
            fetch(`http://localhost:8080/products/${id}`)
            .then((r) => r.json())
            .then((d) => setItem(d));
        } 
        else if(id === false) {
            
        }
    },[id])
  return (
    <div>
        Details , ID: {id}
        <div>Item Name: {item.name}</div>
        <div>Item Price: {item.price}</div>
    </div>
  )
}

export default Details


