import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FlowerOrders from '../FlowerOrder/FlowerOrder'

const Flower = ({ flower,  storeOrderItem }) => {
  const { name, img, price, id } = flower;
  const navigate = useNavigate();
  return (
    <div className="border-solid border-2 border-lime-700 rounded-lg py-5">
      <div className="text-center">
        <img className="w-64 m-auto" src={img} alt="" />
      </div>
      <h1>{name}</h1>
      <p>Price: ${price}</p>
      
      <button
        onClick={() => navigate(`/flower/${id}`)}
        className="bg-green-600 text-dark-600 px-9 mx-2 py-1 border-2 rounded-md"
      >
        Details
      </button>
      <Link 
      onClick={() => storeOrderItem(flower)}
        to={`/store/${id}`}
        className="bg-green-600 text-dark-600 px-9 mx-2 py-1 border-2 rounded-md"
      >
        Order
      </Link>

      <div>
        <FlowerOrders order={flower}></FlowerOrders>
      </div>
    </div>
  );
};

export default Flower;
