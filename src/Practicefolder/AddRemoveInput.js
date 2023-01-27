import React, { useState } from "react";
import { Container, Input, Button, Stack } from "@chakra-ui/react";
const AddRemoveInput = () => {
  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangevalue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangevalue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deleteval = [...val];
    deleteval.splice(i, 1);
    setVal(deleteval);
  };
  console.log(val, "data");
  return (
    <>
      <Stack direction="row" m="5">
        <Button colorScheme="teal" size="lg" onClick={handleAdd}>
          Add
        </Button>
      </Stack>
      {val.map((data, i) => {
        return (
          <>
            <Container maxW="550px" color="black" m={10}>
              <Input valu={data} onChange={(e) => handleChange(e, i)} />
              <Button onClick={() => handleDelete(i)}>x</Button>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default AddRemoveInput;
