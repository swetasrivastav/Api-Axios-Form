import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  VStack,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  Image,
  ButtonGroup,
  Container,
  Center,
} from "@chakra-ui/react";

function Fetchnew() {
  const [news, setNews] = useState([]);

  const abc = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=531d7ae9032f4819929a81ee7357c8f6"
      )
      .then((response) => {
        //console.log(response);
        setNews(response.data.articles);
        console.log(response.data.articles);
      });
  };

  return (
    <>
      <Stack spacing={4} direction="row" align="center" m={8}>
        <Button colorScheme="teal" size="lg" onClick={abc}>
          Click Me
        </Button>
      </Stack>

      {news.map((value) => {
        return (
          <VStack>
            <Container maxW="container.lg">
              <Card maxW="lg">
                <CardBody>
                  <Image src={value.urlToImage} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{value.title}</Heading>
                    <Text>{value.description}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue" align={Center}>
                      Read More..
                    </Button>
                    {/* <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button> */}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Container>
          </VStack>
        );
      })}
    </>
  );
}

export default Fetchnew;
