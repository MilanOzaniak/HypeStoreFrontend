import React from 'react';
import './CurrentItem.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import {FiMoreVertical} from "react-icons/fi";


const CurrentItemPage = () =>{
    const { id } = useParams();
    const [currentItem, setCurrentItem] = useState('');
    const [user, setUser] = useState('');
    const token = localStorage.getItem("token");
    const currentUser = localStorage.getItem("userName");
    const [isAdmin] = useState(currentUser === "admin");
    const url = process.env.REACT_APP_API_URL;
    let images = [];

    useEffect (async () =>{
        await axios.get(url + "/item/getItem/" + id).then((response) =>{
            setCurrentItem(response.data);
            images = response.data.imageNames;
            return response.data.userName;

        }).then(info => {
            axios.get(url + "/user/getUser/" + info).then((response)=>{
                setUser(response.data);
            })
        })
    }, [])


    function handleDelete (e) {
        axios.get(url + "/item/del/" + e, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(()=>{
            window.location.reload(false);
        })
    }

    return (
        <body>
            <section>
                <div className="container flex">
                    <div className="left">
                        <div className='product1'>
                            <div className="product_small_img">
                                <img src={currentItem.imageNames ? url +"/item/getImage/" + currentItem.imageNames[1] : null} alt="" ></img>  
                                <img src={currentItem.imageNames ? url +"/item/getImage/" + currentItem.imageNames[2] : null} alt="" ></img>
                                <img src={currentItem.imageNames ? url +"/item/getImage/" + currentItem.imageNames[3] : null} alt="" ></img>
                                <img src={currentItem.imageNames ? url +"/item/getImage/" + currentItem.imageNames[3] : null} alt="" ></img>
                             </div>
                                <div className='img_container'>
                                    <img src={currentItem.imageNames ? url +"/item/getImage/" + currentItem.imageNames[0] : null} alt=""  ></img>
                                </div>
                        </div>
                    </div>
                    <div className="right"> 
                        <div className="Product-Date">
                            {"Pridané " + currentItem.date}
                        </div>
                        <div className="Product-Title">
                            {currentItem.title}
                        </div>
                        <div className="Product-Info">
                            {currentItem.description} 
                        </div>
                        <div className="Product-Size">
                            Size: {currentItem.size}
                        </div>
                        <div className="Product-Price">
                            {currentItem.price}<small>€</small>
                        </div>
                        <div className='profile'>
                            <div className="profilePic">
                                <div className='pic'>
                                    <img src={url + "/user/getImage/" + user.profileImage} className="profile_picture"/> 
                                </div>
                            </div>
                            <div className='profileInfo'>
                                <div className="Name">
                                    <Link to={`/user/${user.userName}`}><a>{user.userName}</a></Link>
                                </div>
                                <div className="Phonenumber">
                                    <a>{user.pnumber}</a>
                                </div>
                                <div className="Email">
                                    <a>{user.email}</a>
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