import React, { useState, createContext } from "react";

export const CatContext = createContext();

export const CatProvider = (props) => {
  const [cat, setCat] = useState();

  return (
    <CatContext.Provider value={[cat, setCat]}>
      {props.children}
    </CatContext.Provider>
  );
};
