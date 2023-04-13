import React from 'react'
import './style.css'
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
  <div className='footer'>
    <div class="footer-distributed">

        <div class="footer-left">
            <h3>Hypestore</h3>

            <p class="footer-links">
            <a href="/Shoes">Shoes</a>
            <a href="/Clothing">Clothing</a>
            <a href="/Accessories">Accessories</a>
            <a  href="/Aboutus">About us</a>
            </p>

            <p class="footer-company-name">Copyright © 2022 </p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p>Kontaktné info</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+421 903 372 **1</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p>hypestore@gmail.com</p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>O nás</span>
                Nieco vymysliet
            </p>
            <div class="footer-icons">
                <a href="#"><FaInstagram></FaInstagram></a>
                <a href="#"><FaFacebookSquare></FaFacebookSquare></a>
                <a href="#"><FaInstagram></FaInstagram></a>
                <a href="#"><FaFacebookSquare></FaFacebookSquare></a>
                
            </div>
        </div>
    </div>
  </div>
  )
}

export default Footer