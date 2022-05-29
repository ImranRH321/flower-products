import React, { useState } from "react";
import useFlowersProduct from "../../hooks/useFlowersProduct";
import { addToDb } from "../../server/fakeDb";
import Flower from "../Flower/Flower";

const Flowers = () => {
  const [flowers, setflowers] = useFlowersProduct();
  const [orderFlower, setOrderFlower] = useState([])


  // modelbutton
  const storeOrderItem = product => {
     console.log(product);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {flowers.map(flower => (
        <Flower
          flower={flower}
          key={flower.id}
          detailButton={storeOrderItem}
        ></Flower>
      ))}
    </div>
  );
};

export default Flowers;
