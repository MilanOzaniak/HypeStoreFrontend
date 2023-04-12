import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import image from '../../images/pic.png'
import { Link, useParams } from "react-router-dom";
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';



const UserPage = () =>{
    const { userName } = useParams();
    const [currentUser, setCurrentUser] = useState('');
    const [comment, setComment] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [items, setItems] = useState('');
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_API_URL;

    useEffect( () =>{
        axios.get(url + "/user/getUser/" + userName).then((response)=>{
            setCurrentUser(response.data);
        })
    }, [])

    console.log(currentUser)
    const handleComment = event =>{
        setComment(event.target.value)
    }

    function handleProducts (e){
        setIsVisible(false)
    }

    function handleComments (){
        setIsVisible(true)
    }

    function writeComment(){
        const data = new FormData();
        data.append("id", currentUser.id)
        data.append("comment", comment)
        axios.post(url + "/comment/writeComment", data, {headers:{"Authorization" : `Bearer ${token}`}}).then((response)=>{
            window.location.reload(false);
            setIsVisible(true);
        })
        console.log(userName)


    }
    return(
        <div>
            <div className='container1'>
                <div className='profile-details1'>
                    <div className='pd-row1'>
                        <div className='left1'>
                            <img src={url + "/user/getImage/" + currentUser.profileImage} className='pd-image1'></img>
                        </div>
                        <div className='right1'>
                            <div className='Profile-Info1'>
                                <h3>{currentUser.userName}</h3>
                            </div>
                            <div className='Profile-Email1'>
                                <h3>{currentUser.email}</h3>
                            </div>
                            <div className='Profile-Number1'>
                                <h3>{currentUser.pnumber}</h3>
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
                <a className='comments' onClick={handleComments}>Comments</a>
            </div>
            </div>

            <div className='list-wrap' style = {{display: isVisible ? 'none' : 'grid' }}>
                {currentUser.items? (currentUser.items.map((data) =>
                    {return (
                    <div className='listItem-wrap' key={data.id}>
                        <Link to={`/clothing/${data.id}`}>
                            <img className='img-box' src={data.imageNames ? url + "/item/getImage/" + data.imageNames[0] : null} alt=''/>
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
            <div className='comment-session' style = {{display: isVisible ? 'block' : 'none' }}>
            {currentUser.comments? (currentUser.comments.map((data) =>
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
                
                <div className='comment-box'>
                    <div className='user'>
                        <div className='image'><img src={""} className="faq" alt=''/></div>
                        <div className='name'>{localStorage.getItem("userName")}</div>
                    </div>
                    <div >
                        <textarea name='comment' value ={comment} onChange={handleComment} placeholder='Your Message'></textarea>
                        <button className='comment-submit' onClick={writeComment}>Comment</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default UserPage;