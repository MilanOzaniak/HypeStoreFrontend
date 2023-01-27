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

const ListAccessories = () => {
  const [item, setItem] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/item/getAllAccessories").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  return(

    <div className='list-wrap'>
    {item? (item.map((data) =>
      {return (
        <div className='listItem-wrap' key={data.id}>
            <Link to={`/accessories/${data.id}`}>
              <img className='img-box' src={data.imagePath} alt=''/>
            </Link>
          <header>
            <h4>{data.title}</h4>
          </header>
          <footer>
            <p>
              <b>${data.price}</b>
            </p>
          </footer>
        </div>
      )})) : (<h3>No data yet</h3>)}
    </div>
  )
} 

export default ListAccessories;