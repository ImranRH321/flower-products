import React, { useState } from "react";
import useFlowersProduct from "../../hooks/useFlowersProduct";
import { addToDb } from "../../server/fakeDb";
import Flower from "../Flower/Flower";

const Flowers = () => {
  const [flowers, setflowers] = useFlowersProduct();
  const [orderFlower, setOrderFlower] = useState([])


  // modelbutton
  const detailButton = product => {
    addToDb(product.id);
    const newFlower = [...orderFlower, product] 
    console.log(newFlower);
    setOrderFlower(newFlower)
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {flowers.map(flower => (
        <Flower
          flower={flower}
          key={flower.id}
          detailButton={detailButton}
        ></Flower>
      ))}
    </div>
  );
};

export default Flowers;
