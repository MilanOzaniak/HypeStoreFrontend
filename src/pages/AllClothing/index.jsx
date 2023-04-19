import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import { FaStar, FaBookmark } from 'react-icons/fa';

const ClothingPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [item, setItem] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");

  const handleMouseOver = (i) => {
    var element = document.getElementById(i);
    element.classList.add("visible")
  };

  const handleMouseLeave = (i) => {
    var element = document.getElementById(i);
    element.classList.remove("visible");
  };

  function favItemHandler (id){
    let data = new FormData();
    data.append("id", id);

    axios.post(url + "/user/addFavItem", data, {
      headers:{"Authorization" : `Bearer ${token}`}}).then(()=>{
        console.log("sadas")
      })
  }

  function resItemHandler (id){
    let data = new FormData();
    data.append("id", id);

    axios.post(url + "/user/reserveItem", data, {
      headers:{"Authorization" : `Bearer ${token}`}}).then(()=>{
        console.log("sadas")
      })
  }


  useEffect(() => {
    axios.get(url + "/item/getAllClothing").then((response) => {
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
                <div className='listItem-wrap' key={data.id}
                onMouseOver={()=>handleMouseOver(data.id)}
                onMouseLeave={()=>handleMouseLeave(data.id)}>

                {(<div className= 'top-row' id={`${data.id}`}>
                  <FaStar onClick={()=>favItemHandler(data.id)} className='star'></FaStar>
                  <FaBookmark onClick={()=>resItemHandler(data.id)} className='edit'></FaBookmark>
                </div>)}

                  <Link to={`/HypeStoreFrontend/clothing/${data.id}`}>
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

export default ClothingPage;