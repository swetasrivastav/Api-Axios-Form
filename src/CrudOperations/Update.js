import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Update = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState(null);
  console.log(name);
  console.log(lastname);
  console.log(email);

  const Handlersubmit = (e) => {
    axios
      .put(`https://63a92db4100b7737b98b7c07.mockapi.io/crud/${ID}`, {
        name,
        lastname,
        email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setLastName(localStorage.getItem("lastname"));
    setEmail(localStorage.getItem("email"));
    setID(localStorage.getItem("ID"));
  }, []);
  return (
    <div>
      <VStack>
        <Container maxW="550px" color="black" m={10}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>Lastname</FormLabel>
            <Input
              type="Lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Container>
        <Button colorScheme="blue" onClick={Handlersubmit}>
          Update
        </Button>
      </VStack>
    </div>
  );
};

export default Update;
