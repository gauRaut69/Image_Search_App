import React, { useState } from "react";
import { createContext } from "react";

export const PhotoDataContext = createContext();

export const PhotoDataProvider = (props) => {
  const [photoData, setPhotoData] = useState([]);

  return (
    <PhotoDataContext.Provider value={{ photoData, setPhotoData }}>
      {props.children}
    </PhotoDataContext.Provider>
  );
};

