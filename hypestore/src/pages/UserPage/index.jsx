import React from "react";
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

const UserPage = () =>{
    const { userName } = useParams();
    const [currentUser, setCurrentUser] = useState('');
    const [items, setItems] = useState('');

    useEffect( () =>{
        axios.get("http://localhost:8080/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
        })
    })
    console.log(currentUser);

    return(
        <div>
            <div>{currentUser.userName}</div>
            <div>{currentUser.email}</div>
            <div>{currentUser.pnumber}</div>
            <div>{currentUser.description}</div>

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
export default UserPage;