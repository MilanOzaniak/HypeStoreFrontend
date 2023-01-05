import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, rating },
}) => (
  <div className='listItem-wrap'>
    <img className='img-box' src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
       <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;