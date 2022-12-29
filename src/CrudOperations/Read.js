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
  const getData = () => {
    axios
      .get(`https://63a92db4100b7737b98b7c07.mockapi.io/crud`)
      .then((responce) => {
        setApiData(responce.data);
      });
  };
  const onDelete = (id) => {
    axios
      .get(`https://63a92db4100b7737b98b7c07.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
        console.log(id);
      });
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
                        <Link to="/delete">
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
                        </Link>
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
