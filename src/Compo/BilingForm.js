import React from "react";
import {
  Input,
  Textarea,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  Select,
  FormLabel,
  Checkbox,
  Button,
} from "@chakra-ui/react";
const BillingForm = () => {
  return (
    <Container maxW="container.lg" p="10">
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
          <VStack align="flex-start">
            <Heading>Your Details</Heading>
            <Text>If you already have an account , Click here to log in.</Text>
          </VStack>

          <SimpleGrid column={2} columnGap={3} rowGap={4}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeHolder="Enter First Name" />
              </FormControl>
            </GridItem>
            {/*--Last Name--*/}
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeHolder="Enter Last Name" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea placeHolder="Enter Your Address..." />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Textarea placeHolder="Enter Your City..." />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select Country">
                  <option value="India">India</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <Checkbox>Ship to the billing address.</Checkbox>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <Button width="full">Place Items.</Button>
            </GridItem>
          </SimpleGrid>
        </VStack>

        {/*---for another card---*/}
      </Flex>
    </Container>
  );
};

export default BillingForm;
