import { Stack } from "@mui/material";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100px"}
    >
      <InfinitySpin color="gray" />
    </Stack>
  );
};

export default Loader;
