import React, { useState } from "react";
import axios from "axios";

import {
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const CurdOpreation = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const data = { name, lastname, email };

  const Handlersubmit = (e) => {
    axios
      .post(`https://63a5998cf8f3f6d4abfa9630.mockapi.io/curd`, { data })

      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //console.log(data);
  };
  return (
    <div>
      <VStack>
        <Container maxW="550px" color="black" m={10}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="name" onChange={(e) => setName(e.target.value)} />
            <FormLabel>Lastname</FormLabel>
            <Input
              type="Lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
        </Container>
        <Button colorScheme="blue" onClick={Handlersubmit}>
          Submit
        </Button>
      </VStack>
    </div>
  );
};

export default CurdOpreation;
