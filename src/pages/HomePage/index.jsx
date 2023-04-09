import React from 'react';
import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const Home = () => {
  const url = "https://hypestorebackend-production-83e4.up.railway.app";
  localStorage.setItem("url", url);
  const [item, setItem] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    axios.get(url + "/item/getAll").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <><Hero slides={SliderData} />
    <div className='home_panelList-wrap'>
      <div className='home_list-wrap'>
        
        <div className='list-wrap'>
          {item? (item.map((data) =>{
            return (
              <div className='listItem-wrap' key={data.id}>
                <Link to={`/${data.id}`}>
                  <img className='img-box' src={url + "/item/getImage/" + data.imageNames[0]} alt=''/>
                </Link>
                <h4>{data.title}</h4>
                <b>${data.price}</b>
              </div>
        )})) : (<h3>No data yet</h3>)}
        </div>
      </div>
    </div></>
  );
};

export default Home;