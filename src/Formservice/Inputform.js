import React, { useState } from "react";
import {
  Input,
  Container,
  Stack,
  Button,
  Select,
  SimpleGrid,
  Box,
  FormLabel,
  Divider,
  Heading,
} from "@chakra-ui/react";

const Inputform = () => {
  //   const SubmitHendler = (event) => {
  //     event.preventDefault();
  //   };
  //   const changeHendler = (e) => {
  //     console.log(e.target.value);
  //   };

  const [education, setDegree] = useState("");
  const [passingyear, setyear] = useState("");
  const [educationqualification, setqualification] = useState([]);
  const ChangeHandler = (e) => {
    setDegree(e.target.value);
    console.log(e.target.value);
  };
  const ChangeHandler1 = (e) => {
    setyear(e.target.value);
    console.log(e.target.value);
  };

  const adddata = (e) => {
    setqualification(educationqualification.push(education, passingyear));
    console.log(educationqualification);
  };

  // setDegree(event.target.value);
  return (
    <div>
      <Container maxW="container.sm" color="black">
        <Heading
          bgGradient="linear(to-r,green.500,red.300,blue.600,)"
          bgClip="text"
          textAlign="center"
        >
          Studentdata
        </Heading>

        <SimpleGrid columns={2} spacing={10} m={5}>
          <Box height="4rem">
            <FormLabel>Name</FormLabel>
            <Input placeholder="name" />
          </Box>
          <Box height="4rem">
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="last name" />
          </Box>
          <Box height="4rem">
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" />
          </Box>
          <Box height="4rem">
            <FormLabel>Phone</FormLabel>
            <Input placeholder="your number" />
          </Box>
          <Stack direction="row" height={10}>
            <Divider orientation="vertical" columns={8} spacing={4} m={5} />
            <Select placeholder="Select Education" onChange={ChangeHandler}>
              <option>B A</option>
              <option>M A</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>BCA</option>
              <option>MCA</option>
            </Select>
            <Select
              placeholder="Passing Year"
              onChange={ChangeHandler1}
              height={10}
              spacing={3}
            >
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </Select>
            <Button onClick={adddata}>Add</Button>
          </Stack>
          {educationqualification.map((fruit, index) => (
            <p key={index}>{fruit}</p>
          ))}
          ;
        </SimpleGrid>

        <Stack direction="row" spacing={4} align="center" p={3}>
          <Button colorScheme="teal" variant="outline">
            Submit
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Inputform;
