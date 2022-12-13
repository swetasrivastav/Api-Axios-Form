import React, { useEffect, useState } from "react";
//import Data from "./Data";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Stack,
} from "@chakra-ui/react";

const Balance = () => {
  const [currentYear, setCurrentYear] = useState(() =>
    new Date().getFullYear()
  );
  const [previousYear, setPreviousYear] = useState(() =>
    new Date().getFullYear()
  );
  const [previousTopreviousYear, setPreviousToPreviousYear] = useState(() =>
    new Date().getFullYear()
  );
  useEffect(() => {
    setCurrentYear();
    setPreviousYear();
    setPreviousToPreviousYear();
  }, []);

  return (
    <TableContainer maxWidth="100%" m="2rem" p="1.5">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>BALANCESHEET HEADERS</Th>
            <Th>FY(Previous year)-2</Th>
            <Th>FY(Previous year)-1</Th>
            <Th>FY(Current year)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Stack spacing={4} width="4rem"></Stack>
            <Td>
              <Stack spacing={4}>
                <Input placeholder="Number" size="lg" />
              </Stack>
            </Td>
            <Td>
              <Stack spacing={4}>
                <Input placeholder="Number" size="lg" />
              </Stack>
            </Td>
            <Td>
              <Stack spacing={4}>
                <Input placeholder="Number" size="lg" />
              </Stack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Balance;
