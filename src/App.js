import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
//import Fetchnew from "./Workspace/Fetchnew";
//import Read from "./Component/Read";
//import Expense from "./NewExpenses/Expense";
//import MovieList from "./Component/MovieList";
//import UserData from "./Component/UserData";
//import Form from "./Compo/Form";
//import Balancesheet from "./Workspace/Balancesheet";
//import Balance from "./Workspace/Balance";
//import News from "./Workspace/News";
//import Inputform from "./Formservice/Inputform";
import StateCityData from "./Formservice/StateCityData";
function App() {
  return (
    <ChakraProvider>
      {/* <News key="test" /> */}
      {/* <Fetchnew /> */}
      <StateCityData />
      {/* <Studentdata /> */}
    </ChakraProvider>
  );
}

export default App;
