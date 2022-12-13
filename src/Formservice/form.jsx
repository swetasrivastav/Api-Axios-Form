import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Stack,
  Button,
  Select,
} from "@chakra-ui/react";

function form() {
  const SubmitHendler = (event) => {
    event.preventDefault();
  };
  const changeHendler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Container maxW="550px" color="black" p={10}>
        <FormControl isRequired onSubmit={SubmitHendler}>
          <FormLabel>First name</FormLabel>
          <Input
            type="text"
            placeholder="First name"
            onChange={changeHendler}
          />
          <FormLabel>Last name</FormLabel>
          <Input type="text" placeholder="last name" onChange={changeHendler} />
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="email" onChange={changeHendler} />
          <FormLabel>Phone</FormLabel>
          <Input
            type="number"
            placeholder="your number"
            onChange={changeHendler}
          />
          <FormLabel md="6">Education</FormLabel>
          <Select placeholder="Select Education">
            <option>B A</option>
            <option>M A</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>BCA</option>
            <option>MCA</option>
          </Select>
        </FormControl>

        <Stack spacing={4} align="left" p={5}>
          <Button colorScheme="teal" variant="outline">
            Submit
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

export default form;
