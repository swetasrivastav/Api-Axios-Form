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

const Axiospost = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const data = { name, lastname, email };

  const Handlersubmit = (e) => {
    console.log(data);

    // 1-post method

    // axios
    //   .post(`https://reqres.in/api/users`, { data })

    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // 2-put method

    // axios
    //   .put(`https://reqres.in/api/users/2`, {
    //     email: "John.tondon@reqres.in",
    //     name: "John",
    //     lastname: "tondon",
    //   })

    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // 3-delete method

    // axios
    //   .delete(`https://reqres.in/api/users/2`)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // 4-patch method

    axios
      .patch(`https://reqres.in/api/users/2`, {
        email: "johnson@reqres.in",
        name: "John",
        lastname: "tondon",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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

export default Axiospost;
