import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {BsFilterSquare} from 'react-icons/bs'
import SearchBar from '../../components/Home/SearchBar';
import './styles.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { DragHandle } from '@material-ui/icons';
import { FaStar, FaTrash, FaEdit, FaBookmark } from 'react-icons/fa';


const ShoesPage = () => {
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [item, setItem] = useState([]);
  const url = process.env.REACT_APP_API_URL;
  const [checkedLowest, setCheckedLowest ] = useState(false);
  const [checkedHighest, setCheckedHighest ] = useState(false);
  const [size, setSize] = useState('');
  const token = localStorage.getItem("token");

  const handleMouseOver = (i) => {
    var element = document.getElementById(i);
    element.classList.add("visible")
  };

  const handleMouseLeave = (i) => {
    var element = document.getElementById(i);
    element.classList.remove("visible");
  };


  useEffect(() => {
    axios.get(url + "/item/getAllShoes").then((response) => {
      setItem(response.data);
      console.log(response.data);
    });
  }, []);


	const handleChnangeLowest = () =>{
	setCheckedLowest(!checkedLowest);
	if(!checkedLowest){
		axios.get(url + "/item/getShoesByPriceAsc").then((response) => {
      	setItem(response.data);
      	console.log(response.data);
    });
		}
    else{
      	axios.get(url + "/item/getAllShoes").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
	}

  const handleChnangeHighest = () =>{
	setCheckedHighest(!checkedHighest);
	if(!checkedHighest){
		axios.get(url + "/item/getShoesByPriceDesc").then((response) => {
      	setItem(response.data);
      	console.log(response.data);
    });
		}
    else{
      axios.get(url + "/item/getAllShoes").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
	}

  const handleChangeSize = (event) =>{
    const value = event.target.value;
    setSize(value);

    if (value != null){
      axios.get(url + "/item/getShoesBySize/" + size).then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
    else{
      axios.get(url + "/item/getAllShoes").then((response) => {
        setItem(response.data);
        console.log(response.data);
      });
    }
  }

  function favItemHandler (id){
    let data = new FormData();
    data.append("id", id);

    axios.post(url + "/user/addFavItem", data, {
      headers:{"Authorization" : `Bearer ${token}`}}).then(()=>{
        console.log("sadas")
      })
  }

   
  return (
    <div className='home'>
        <div className='filter-main'>
        <div className='cd-filter'>
			<h3>Filters</h3>
            <div className='filter-block'>
                <div class="content-filter">
					<span className='icon'><BiSearch></BiSearch></span>
					<input type="search" placeholder="Search..."/>
				</div>
            </div>
            <div class="filter-block">					
				<div class="content-filter">
					<div class="select filters">
						<select class="filter" name="selectThis" id="selectThis" onChange={handleChangeSize}>
							<optgroup label="Veľkosť topanok">
								<option value="0">Vyber veľkosť</option>
								<option value="34">34</option>
								<option value="35">35</option>
								<option value="36">36</option>
								<option value="37">37</option>
                            	<option value="38">38</option>
								<option value="39">39</option>
								<option value="40">40</option>
								<option value="41">41</option>
								<option value="42">42</option>
								<option value="43">43</option>
								<option value="44">44</option>
								<option value="45">45</option>
								<option value="46">46</option>
								<option value="47">47</option>
								<option value="48">48</option>
								<option value="49">49</option>
							</optgroup>
							<optgroup label="Veľkost veci">
								<option value="XS">XS</option>
								<option value="S">S</option>
								<option value="M">M</option>
								<option value="L">L</option>
								<option value="XL">XL</option>
								<option value="XXL">XXL</option>
							</optgroup>
						</select>
					</div> 
				</div> 
			</div> 
            <div class="filter-block">					
				<div class="content-filter">
					<div class="select filters">
						<select class="filter" name="selectThis" id="selectThis">
							<optgroup label="Slovenské kraje">
								<option value="">Vyber mesto</option>
								<option value="ZA">Žilinský kraj</option>
								<option value="BA">Bratislavský kraj</option>
								<option value="BB">Banskobystrický kraj</option>
								<option value="KE">Košičský kraj</option>
								<option value="TN">Trenčiansky kraj</option>
								<option value="NR">Nitriansky kraj</option>
								<option value="PR">Prešovkský kraj</option>
								<option value="TR">Trnavský kraj</option>
							</optgroup>
						</select>
					</div> 
				</div> 
			</div>
            <div class="filter-block">
					<h4 className='nazov1'>Zoraď podľa</h4>
					<ul class="content-filter1 filters list">
						<li>
							<input onClick={handleChnangeLowest} class="filter" data-filter=".check1" type="checkbox" id="checkbox1"></input>
							<label class="checkbox-label" for="checkbox1">Najnižšia cena</label>
						</li>
              			<li>
							<input onClick={handleChnangeHighest} class="filter" data-filter=".check2" type="checkbox" id="checkbox2"></input>
							<label class="checkbox-label" for="checkbox2">Najvyššia cena</label>
						</li>
						<li>
							<input class="filter" data-filter=".check3" type="checkbox" id="checkbox3"></input>
							<label class="checkbox-label" for="checkbox3">Najnovšie produkty</label>
						</li>
              			<li>
							<input class="filter" data-filter=".check4" type="checkbox" id="checkbox4"></input>
							<label class="checkbox-label" for="checkbox4">Najstaršie produkty</label>
						</li>
					</ul>
			</div>
			<div className='btn-clear-all'>
				<button>Vyčisti Filtre</button>
			</div>
        </div>
    </div>

      <div className='list-wrap'>
        {item? (item.map((data) =>
          {return (
            <div className='listItem-wrap' key={data.id}
			onMouseOver={()=>handleMouseOver(data.id)}
			onMouseLeave={()=>handleMouseLeave(data.id)}>

				{(<div className= 'top-row' id={`${data.id}`}>
					<FaStar onClick={()=>favItemHandler(data.id)} className='star'></FaStar>
                </div>)}

            <Link to={`/HypeStoreFrontend/shoes/${data.id}`}>
            	<img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
            </Link>
              <h4>{data.title}</h4>
              <b>${data.price}</b>
            </div>
          )})) : (<h3>No data yet</h3>)}
      </div>
    </div>
  );
};

export default ShoesPage;