import React from 'react';
import './styles.css';
import pic from "./../../images/pic.png"
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";


const CurrentItemPage = () =>{
    const { id } = useParams();
    const [currentItem, setCurrentItem] = useState('');
    const [userName, setUserName] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    useEffect (async () =>{
        await axios.get("http://localhost:8080/item/getItem/" + id).then((response) =>{
            setCurrentItem(response.data);
            return response.data.userName;

        }).then(info => {
            axios.get("http://localhost:8080/user/getUser/" + info).then((response)=>{
                setCurrentUser(response.data);
            })
        })
    }, [])



    return (

        <body>
            <section>
                <div className="container flex">
                    <div className="left">
                        <div className="main_image">
                            <img src={currentItem.imagePath} alt=""></img>
                        </div>
                    </div>
                    <div className="right"> 
                        <div class="Product-Date">
                            <h6>{"Pridané " + currentItem.date}</h6>
                        </div>
                        <div className="Product-Title">
                            <h1>{currentItem.title}</h1>
                        </div>
                        <div className="Product-Info">
                            <p>{currentItem.description} </p>
                        </div>
                        <div className="Product-Price">
                            <h2>{currentItem.price}<small>€</small></h2>
                        </div>
                        <div className='profile'>
                            <div className="profilePic">
                                <div className='pic'>
                                    <img src={pic}/> 
                                </div>
                            </div>
                            <div className='profileInfo'>
                                <div className="Name">
                                    <Link to={`/user/${currentUser.userName}`}><h7>{currentUser.userName}</h7></Link>
                                </div>
                                <div className="Phonenumber">
                                    <h7>{currentUser.pnumber}</h7>
                                </div>
                                <div className="Email">
                                    <h7>{currentUser.email}</h7>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
};
export default CurrentItemPage;