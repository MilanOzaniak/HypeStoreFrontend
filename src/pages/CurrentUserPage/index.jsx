import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './CurrentUserPage.css';
import { Link } from "react-router-dom";
import ProfileImage from "../../components/ProfilImage";
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';

const CurrentUserPage = () =>{
    const [currentUser, setCurrentUser] = useState('');
    const [items, setItems] = useState('');
    const [comments, setComments] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const url = process.env.REACT_APP_API_URL;
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    

    console.log(currentUser);
    useEffect( () =>{
        axios.get(url + "/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
            setItems(response.data.items);
            setComments(response.data.comments);
            
        })
    }, [])

    function handleDelete (e) {
        axios.get(url + "/item/del/" + e, {headers:{"Authorization" : `Bearer ${token}`}})
        .then(()=>{
            window.location.reload(false);
        })
        
    }

    console.log(comments)

    function handleProducts (e){
        setItems(currentUser.items)
        setIsVisible(false)
    }

    function handleFavorite (e){
        setItems(currentUser.favItems)
        setIsVisible(false)
    }

    function handleReserved (e){
        setItems(currentUser.reservedItems)
        setIsVisible(false)
    }

    function handleComments (){
        setIsVisible(true)
    }

    console.log(currentUser);

    return(
        <div>
            <div className='container1'>
                <div className='profile-details1'>
                <ProfileImage/>
                    <div className='pd-row1'>
                        <div className='Info'>
                            <div className='Profile-Info1'>
                                {currentUser.userName}
                            </div>
                            <div className='Profile-Email1'>
                                {currentUser.email}
                            </div>
                            <div className='Profile-Number1'>
                                {currentUser.pnumber}
                            </div>
                            <div className="socials">
                                <a className="instagram" href="" title="Instagram">
                                <span className="instagramicon"><FaInstagram></FaInstagram></span>
                                </a>
                                <a className="facebook" href="" title="Facebook">
                                <span className="facebookicon"><FaFacebookSquare></FaFacebookSquare></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="submenu">
            <div className="Submenu-Links">
                <a className='product' onClick={handleProducts}>Product</a>
                <a className='favorite' onClick={handleFavorite}>Favorite</a>
                <a className='reserved' onClick={handleReserved}>Reserved</a>
                <a className='comments' onClick={handleComments}>Comments</a>
            </div>
            </div>
            <div className='list-wrap'  style = {{display: isVisible ? 'none' : 'grid' }} >
                {items? (items.map((data) =>
                    {return (
                        
                    <div className='listItem-wrap' key={data.id}>
                        <Link to={`/clothing/${data.id}`}>
                            <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
                        </Link>
                        <div className="description">
                            <div className="info">
                                <h4 className="data_title">{data.title}</h4>
                                <b>${data.price}</b>
                            </div>
                            <button className= "close" onClick={() => handleDelete(data.id)}>X</button>
                        </div>

                     </div>
                )})) : (<h3>No data yet</h3>)}
            </div>

            <div className='comment-session' style = {{display: isVisible ? 'block' : 'none' }}>
            {comments? (comments.map((data) =>
                {return(
                <div className='post-comment' key={data.id}>
                    <div className='list'>
                        <div className='user'>
                            <div className='user-image'><img src={data.profilePic ? url + "/user/getImage/" + data.profilePic : null} className="faq" alt=''/></div>
                            <div className='user-meta'>
                                <Link to={`/user/${data.ownerName}`} className='name'>{data.ownerName}</Link>
                                <div className='day'>{data.date}</div>
                            </div>
                        </div>
                        <div className='comment-post'>{data.comment}</div>
                    </div>
                </div>
            )})): (<h3>No data yet</h3>)}
                
            </div>

        </div>
    );
}
export default CurrentUserPage;