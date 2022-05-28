import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FlowerDetail = () => {

  const { flowerDetail } = useParams();



 
  return (
    <div>
      <h1>Flower Details {flowerDetail}</h1>
    </div>
  );
};

export default FlowerDetail;
