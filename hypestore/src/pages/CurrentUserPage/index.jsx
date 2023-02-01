import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './styles.css'
import image from './../../images/pic.png'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

const CurrentUserPage = () =>{
    const [currentUser, setCurrentUser] = useState('');
    const userName = localStorage.getItem("userName");
    

    useEffect( () =>{
        axios.get("http://localhost:8080/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
        })
    }, [])

    console.log(currentUser);

    return(
        <div>
            <div className='container'>
                <div className='profile-details'>
                    <div className='pd-row'>
                        <div className='left'>
                            <img src={image} className='pd-image'></img>
                        </div>
                        <div className='right'>
                            <div className='Profile-Info'>
                                <h3>{currentUser.userName}</h3>
                            </div>
                            <div className='Profile-Email'>
                                <h3>{currentUser.email}</h3>
                            </div>
                            <div className='Profile-Number'>
                                <h3>{currentUser.pnumber}</h3>
                            </div>
                        </div>
                        <div className="Profile-Description">
                            <input placeholder={currentUser.description}></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className='list-wrap'>
                {currentUser.items? (currentUser.items.map((data) =>
                    {return (
                    <div className='listItem-wrap' key={data.id}>
                        <Link to={`/clothing/${data.id}`}>
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

        </div>
    );
}
export default CurrentUserPage;