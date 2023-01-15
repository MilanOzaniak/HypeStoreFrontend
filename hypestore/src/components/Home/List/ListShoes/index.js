import React from 'react';
import './styles.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

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
    {item? (item.map((item) =>
      {return (
        <div className='listItem-wrap'>
          <img className='img-box' src={item.imagePath} alt='' />
          <header>
            <h4>{item.title}</h4>
          </header>
          <footer>
            <div class="inputfield">
              <input type="submit" value="View Product" class="btn"></input>
            </div>
            <p>
              <b>${item.price}</b>
            </p>
          </footer>
        </div>
      )})) : (<h3>No data yet</h3>)}
    </div>
  )
} 

export default ListShoes;