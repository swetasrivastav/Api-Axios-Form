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
} from "@chakra-ui/react";

const News = () => {
  const [readyForRender, setReadyForRender] = React.useState(false);
  const [mydata, setNews] = useState();

  useEffect(() => {
    console.log("useEffect called");

    const makeRequest = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=2022-11-12&sortBy=publishedAt&apiKey=531d7ae9032f4819929a81ee7357c8f6`
        );
        if (response.status === 200) {
          // response - object, eg { status: 200, message: 'OK' }
          setNews(response.data);
          setReadyForRender(true);
          console.log("API called");
        }
        return false;
      } catch (err) {
        console.error(err);
        return false;
      }
    };

    makeRequest();
    console.log(mydata);
  }, []);
  console.log(mydata);

  return (
    <>
      <h1>API PAGE</h1>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Author</Th>
              <Th>Title</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {readyForRender
              ? mydata.articles.map((item, i) => {
                  return (
                    <Tr key={i}>
                      <Td>{item.author}</Td>
                      <Td>{item.title}</Td>
                      <Td>{item.name}</Td>
                    </Tr>
                  );
                })
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default News;
