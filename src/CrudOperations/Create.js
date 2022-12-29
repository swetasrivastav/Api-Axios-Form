import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Create = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name);
  console.log(lastname);
  console.log(email);
  const Handlersubmit = (e) => {
    axios
      .post(`https://63a92db4100b7737b98b7c07.mockapi.io/crud`, {
        name,
        lastname,
        email,
      })
      .then(() => {
        navigate("/read");
      });
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

export default Create;
