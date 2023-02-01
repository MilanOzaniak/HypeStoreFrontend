import React from 'react';
import './styles.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const ListShoes = () => {
  const [item, setItem] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/item/getAllShoes").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  return(

    <div className='list-wrap'>
    {item? (item.map((data) =>
      {return (
        <div className='listItem-wrap' key={data.id}>
            <Link to={`/shoes/${data.id}`}>
              <img className='img-box' src={data.imagePath} alt=''/>
            </Link>
            <h4>{data.title}</h4>
            <b>${data.price}</b>
        </div>
      )})) : (<h3>No data yet</h3>)}
    </div>
  )
} 

export default ListShoes;