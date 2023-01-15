import React from 'react';
import './styles.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const ListItem = () => {
  const [item, setItem] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/item/getAll").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  const handleSubmit = (id) => (event) =>{
        axios.get("http://localhost:8080/item/getItem/" + id).then((response) =>{
          setCurrentItem(response.data);
        })}

  return(

    <div className='list-wrap'>
    {item? (item.map((data) =>
      {
        return (
        <div className='listItem-wrap'>
          <img className='img-box' src={data.imagePath} alt='' />
          <header>
            <h4>{data.title}</h4>
          </header>
          <footer>
            <div class="inputfield">
              <input type="submit" value="View Product" class="btn" onClick={handleSubmit(data.id)}></input>
            </div>
            <p>
              <b>${data.price}</b>
            </p>
          </footer>
        </div>
      )})) : (<h3>No data yet</h3>)}
    </div>
  )
} 

export default ListItem;