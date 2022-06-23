import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const CommonError = () => {
  return (
    <Box mx="auto" my="5" maxW="3xl">
      <Heading mx="auto" size="md">
        Something went wrong
      </Heading>
    </Box>
  );
};
