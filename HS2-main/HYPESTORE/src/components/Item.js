import { useState, useEffect } from 'react';
import axios from 'axios';

const Item = () =>{
    const[item,setItem]=useState([])
    const[id, setId] = useState('')
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[size, setSize] = useState('')
    const[price, setPrice] = useState('')




    useEffect(()=>{
        fetch("http://localhost:8080/user/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setItem(result);
        }
      )
      },[])
      return(item)
}

export default Item;