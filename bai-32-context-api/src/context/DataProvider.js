import React, { createContext } from "react";

const DataContext = createContext(null);
const DataProvider = props => {
  return <DataContext.Provider>{props.children}</DataContext.Provider>;
};
export { DataContext, DataProvider };
