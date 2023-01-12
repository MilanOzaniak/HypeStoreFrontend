import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AddProductPage() {
  const[id, setId] = useState('')
  const[title, setTitle] = useState('')
  const[description, setDescription] = useState('')
  const[size, setSize] = useState('')
  const[price, setPrice] = useState('')
  const[category, setCategory] = useState('')
  const[image, setImage] = useState('')
  const[item,setItem]=useState([])

  var fileInput = document.getElementById("fileInput");

  const titleChangeHandler = event => {
    setTitle(event.target.value)
  } 
  const descriptionChangeHandler = event => {
    setDescription(event.target.value)
  }
  const sizeChangeHandler = event => {
    setSize(event.target.value)
  } 
  const priceChangeHandler = event => {
    setPrice(event.target.value)
  }
  const categoryChangeHandler = event =>{
    setCategory(event.target.value)
  }

  const handleSubmit= e =>{
    e.preventDefault()
    const item={title, price, category, size, description}

    let data = new FormData();
    var fileInput = document.getElementById("fileInput");
    data.append("image", fileInput.files[0]);

    console.log(item)

    axios.post("http://localhost:8080/item/create", item, {
      headers:{"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3MzQ5Mzg1OCwiaWF0IjoxNjczNDc1ODU4fQ.ASKYwyP1dw_0snjd5E7ZqT0lNR44gGtzjQJUxgxTR-KAmIkx9h4o0DEMpsGmahzB9KLEAU40bZTt8mQ_1OvGzA"}})
    .then(console.log("Item created"));

    axios.post("http://localhost:8080/item/uploadImage", data, {
    headers:{"Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3MzQ5Mzg1OCwiaWF0IjoxNjczNDc1ODU4fQ.ASKYwyP1dw_0snjd5E7ZqT0lNR44gGtzjQJUxgxTR-KAmIkx9h4o0DEMpsGmahzB9KLEAU40bZTt8mQ_1OvGzA"}})
    .then(console.log("image uploaded"))
  }
    return (

      <div class="wrapper">
        <div class="title">
            Add Product
        </div>
        <div class="form">
            <div class="inputfield">
                <label>Title</label>
                <input 
                  type="text"
                  class="input"
                  value={title}
                  onChange={titleChangeHandler}>
                </input>
          </div>  
          <div class="inputfield">
            <label>Price</label>
              <input
                type="text" 
                class="input" 
                value={price} 
                onChange={priceChangeHandler}>
              </input>
        </div>   
          <div class="inputfield">
            <label>Category</label>
              <div class="custom_select">
                <select 
                  value={category}
                  onChange={categoryChangeHandler}>
                  <option value="">Select</option>
                  <option 
                    value={"Shoes"}>Shoes</option>
                  <option
                    value={"Clothes"}>Clothes</option>
                  <option 
                    value={"Accessories"}>Accessories</option>
                </select>
              </div>
          </div> 
          <div class="inputfield">
            <label>Size</label>
              <div class="custom_select">
                <select 
                  value={size}
                  onChange={sizeChangeHandler}>
                  <option value="">Select</option>
                  <option 
                    value="S">S</option>
                  <option 
                    value="M">M</option>
                  <option 
                    value="L">L</option>
                  <option 
                    value="XL">XL</option>
                </select>
             </div>
          </div> 
          <div class="inputfield">
            <label>Decsription</label>
            <textarea 
              class="textarea"
              value={description}
              onChange={descriptionChangeHandler}>
            </textarea>
          </div>
          <div class="multipart">
            <input id="fileInput" type="file" />
          </div>
          <div class="inputfield">
            <input type="submit" value="Create Item" class="btn" onClick={handleSubmit}></input>
          </div>
        </div>
      </div>
    );
};

export default AddProductPage;