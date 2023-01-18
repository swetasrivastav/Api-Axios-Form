import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Stack, Chip } from "@mui/material";

const Apidata = () => {
  const [posts, setPosts] = useState([]);
  //const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState("");
  //const [selectvalue, setSelectvalue] = useState("");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user")).accessToken.__raw;
    console.log(token);
    fetch("https://ibankey.azurewebsites.net/bank/banks", {
      headers: {
        Authorization: "bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput !== "") {
  //     const filteredData = posts.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(posts);
  //   }
  // };

  return (
    <>
      <Stack sx={{ width: 450 }}>
        <Autocomplete
          multiple
          id="bankId"
          options={posts.map((item) => item.code)}
          renderTags={(value, getTagProps) =>
            value.map((item, index) => (
              <Chip
                variant="outlined"
                label={item}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="BANK NAME"
              placeholder="search here..."
            />
          )}
        />
      </Stack>

      {/* <TextField
        label="Bank"
        variant="filled"
        onChange={(e) => searchItems(e.target.value)}
      />

      <Box>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return <MenuItem>{item.code}</MenuItem>;
            })
          : posts.map((item) => {
              <MenuItem>{item.code}</MenuItem>;
            })}
      </Box> */}
      {/* <select
        style={{ height: 40, width: 450, borderColor: "blue" }}
        onChange={(e) => setSelectvalue(e.target.value)}
      >
        <option>Select Bank</option>
        {posts.map((banklistArr, i) => (
          <option key={i}>{banklistArr.code}</option>
        ))}
      </select>
      <Box
        sx={{
          width: 430,
          height: 30,
          borderRadius: 2,
          border: 1,
          borderColor: "blue",
          p: 1,
        }}
      >
        {selectvalue}
      </Box> */}
    </>
  );
};

// <div>
//   <table>
//     <thead>
//       <tr>
//         <th>bank id</th>
//         <th>bank name</th>
//         <th>bank description</th>
//       </tr>
//     </thead>
//     <tbody>
//       {posts.map((banklistArr, i) => {
//         return (
//           <tr key={i}>
//             <td>{banklistArr.bankId}</td>
//             <td>{banklistArr.code}</td>
//             <td>{banklistArr.description}</td>
//           </tr>
//         );
//       })}
//     </tbody>
//   </table>
// </div>

export default Apidata;
