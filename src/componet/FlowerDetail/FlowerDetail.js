import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './FlowerDetail.css'

const FlowerDetail = () => {
  const [flowers, setflowers] = useState({});
  
  let location = useLocation();
console.log(location);

  const { flowerDetail } = useParams();

  useEffect(() => {
    fetch(`/products.json`)
      .then(res => res.json())
      .then(data => {
        const detailId = data.find(pd => pd.id === flowerDetail);
        setflowers(detailId);
      });
  }, []);

  return (
    <div className="detail">
      <div>
      <img src={flowers.img} alt="" />
      </div>
     <div className="detail_item">
     <h3>name: {flowers.name}</h3>
      <h3>price: {flowers.price}</h3>
      <p>{flowers.text}</p>
     </div>
    </div>
  );
};

export default FlowerDetail;
