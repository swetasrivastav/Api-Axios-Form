import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
//mport SempleForm from "./Compo/SempleForm";
import ImageApi from "./Workspace/ImageApi";
//import Axiospost from "./Workspace/Axiospost"
import StateCityData from "./Servicese/StateCityData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./CrudOperations/Update";

import Create from "./CrudOperations/Create";
import Read from "./CrudOperations/Read";
import AddRemoveInput from "./Practicefolder/AddRemoveInput";
function App() {
  return (
    <ChakraProvider>
      <div>
        {/* <AddRemoveInput />
  
        {/* <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter> */}
        {/* <ImageApi /> */}
        <StateCityData />
      </div>
    </ChakraProvider>
  );
}

export default App;
