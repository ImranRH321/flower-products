import React, { useEffect, useState } from "react";

const useFlowersProduct = () => {
  const [flowers, setflowers] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setflowers(data));
  }, []);
  return [flowers, setflowers];
};

export default useFlowersProduct;
