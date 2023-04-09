import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';

const AccessoriesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [item, setItem] = useState([]);
  const url = localStorage.getItem("url");
  //sadasd

  useEffect(() => {
    axios.get(url + "/item/getAllAccessories").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);
  
  return (
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className='home_panelList-wrap'>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
        <div className='list-wrap'>
          {item? (item.map((data) =>
            {return (
              <div className='listItem-wrap' key={data.id}>
                <Link to={`/accessories/${data.id}`}>
                  <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
                </Link>
                <h4>{data.title}</h4>
                <b>${data.price}</b>
              </div>
            )})) : (<h3>No data yet</h3>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;