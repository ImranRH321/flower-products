import React, { useEffect, useState } from "react";
import { getDb } from "../server/fakeDb";

const useStoreProduct = flowers => {
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    const storeProductId = getDb();
    const saveCart = [];
    for (const id in storeProductId) {
      const addedStore = flowers(pd => pd.id === id);
      if (addedStore) {
        const ramaning = storeProductId[id];
        addedStore.value = ramaning;
        saveCart.push(addedStore);
      }
    }
    setSingleProduct(saveCart);
  }, [flowers]);
};

export default useStoreProduct;
