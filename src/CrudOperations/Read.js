import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const deleteTable = async (id) => {
  try {
    const response = await fetch(
      `https://63a92db4100b7737b98b7c07.mockapi.io/crud/${id}`,
      {
        method: "POST",
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
const Read = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://63a92db4100b7737b98b7c07.mockapi.io/crud`)
      .then((responce) => {
        setApiData(responce.data);
      });
  }, []);

  const setID = (id, name, lastname, email) => {
    //console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
  };
  // unuse code here
  // const getData = () => {
  //   axios
  //     .get(`https://63a92db4100b7737b98b7c07.mockapi.io/crud`)
  //     .then((responce) => {
  //       setApiData(responce.data);
  //     });
  // };

  const onDelete = (id) => {
    const deepvalue = JSON.parse(JSON.stringify(apiData));
    const index = deepvalue.findIndex((data) => {
      if (data.id === id) {
        return true;
      }
    });
    if (index !== -1) {
      deepvalue.splice(index, 1);
    }
    setApiData(deepvalue);
    deleteTable(id);
  };
  return (
    <div>
      <VStack>
        <Container maxW="container.lg" m={10}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Lastname</Th>
                  <Th>Email</Th>
                  <Th>Update</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {apiData.map((value, i) => {
                  return (
                    <Tr key={i}>
                      <Td>{value.id}</Td>
                      <Td>{value.name}</Td>
                      <Td>{value.lastname}</Td>
                      <Td>{value.email}</Td>
                      <Td>
                        <Link to="/update">
                          <Button
                            colorScheme="green"
                            onClick={() =>
                              setID(
                                value.id,
                                value.name,
                                value.lastname,
                                value.email
                              )
                            }
                          >
                            Update
                          </Button>
                        </Link>
                      </Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          onClick={() =>
                            onDelete(
                              value.id,
                              value.name,
                              value.lastname,
                              value.email
                            )
                          }
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </VStack>
    </div>
  );
};

export default Read;
