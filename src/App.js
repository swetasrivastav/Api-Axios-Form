import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
//import Fetchnew from "./Workspace/Fetchnew";
//import Read from "./Component/Read";
//import Expense from "./NewExpenses/Expense";
//import MovieList from "./Component/MovieList";
//import UserData from "./Component/UserData";
//import SempleForm from "./Compo/SempleForm";
//import Demoform from "./Compo/Demoform";
import BilingForm from "./Compo/BilingForm";
//import Balancesheet from "./Workspace/Balancesheet";
//import Balance from "./Workspace/Balance";
//import News from "./Workspace/News";
//import Inputform from "./Servicese/Inputform";
//import StateCityData from "./Servicese/StateCityData";
function App() {
  return (
    <ChakraProvider>
      {/* <News key="test" /> */}

      <BilingForm />

      {/* <Fetchnew /> */}
      {/* <StateCityData /> */}
      {/* <Studentdata /> */}
    </ChakraProvider>
  );
}

export default App;
