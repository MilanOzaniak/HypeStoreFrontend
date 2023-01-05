import Item from "../components/Item";
import useForm from "../components/useForm";

export const categoryList = [
    {
      id: 1,
      value: 'nike',
      label: 'Nike',
    },
    {
      id: 2,
      value: 'adidas',
      label: 'Adidas',
    },
    {
      id: 3,
      value: 'puma',
      label: 'Puma',
    },
    {
      id: 3,
      value: 'vans',
      label: 'Vans',
    },
    {
      id: 3,
      value: 'newbalance',
      label: 'New Balance',
    },
  ];
  
  export const ratingList = [
    {
      id: 1,
      value: '1',
      label: '1🌟',
    },
    {
      id: 2,
      value: '2',
      label: '2🌟',
    },
    {
      id: 3,
      value: '3',
      label: '3🌟',
    },
    {
      id: 4,
      value: '4',
      label: '4🌟',
    },
    {
      id: 5,
      value: '5',
      label: '5🌟',
    },
  ];
  
  export const dataList = [
    {
      id: Item.id,
      title: Item.title,
      deliveryFee: 3.44,
      category: 'nike',
      cuisine: 'air jordan',
      rating: 5,
      price: Item.price,
      coverSrc: '/images/places/airjordan2.jpg',
    },
    
  ];
  