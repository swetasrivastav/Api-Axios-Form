import React, { useState } from "react";
import axios from "axios";

import {
  Container,
  VStack,
  Input,
  Stack,
  Grid,
  Button,
  Heading,
  GridItem,
} from "@chakra-ui/react";

const ImageApi = () => {
  const [searchvalue, setSearchvalue] = useState("");
  const [result, setResult] = useState([]);

  const SearchHandler = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchvalue}&client_id=AzLwSOd2UN87v7d7wJsD5TaaT9BR60ezNZgPDrOGhdE`
      )
      .then((response) => {
        setResult(response.data.results);
        console.log(response.data.results[0].urls.small);
      });
  };

  return (
    <div>
      <VStack>
        <Container maxW="container.sm" m={10}>
          <Heading as="h3" size="lg">
            Image Search Results
          </Heading>
          <Stack spacing={3} m={5}>
            <Input
              placeholder="Search Image"
              onChange={(e) => setSearchvalue(e.target.value)}
              size="md"
              width={600}
            />
          </Stack>
          <Stack direction="row" spacing={4} align="center">
            <Button
              type="submit"
              colorScheme="teal"
              variant="outline"
              onClick={SearchHandler}
            >
              Search
            </Button>
          </Stack>
          {result.map((value, i) => {
            return (
              <Grid templateColumns="repeat(3, 1fr)" gap={6} key={i}>
                <GridItem w="100%" h="10" />
                <img src={value.urls.small} alt={value.image} />
              </Grid>
            );
          })}
        </Container>
      </VStack>
    </div>
  );
};

export default ImageApi;
