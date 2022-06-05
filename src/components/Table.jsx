import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";
import Error from "./Error";

const Table = ({ name, price, id }) => {
    
  return (
    <>
      <tr >
        <td >{name}</td>
        <td >{price}</td>
        <td>
          {id=== false ? <Link to={`/error`}>Details</Link> : <Link to={`/products/${id}`}>Details</Link>}
          
        </td>
      </tr>
    </>
  );
};

export default Table;
