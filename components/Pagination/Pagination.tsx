import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface PeginationProps {
  resultsPerPage: number;
  offset: number;
  totalResults: number;
}

export const Pagination = ({
  resultsPerPage,
  offset,
  totalResults,
}: PeginationProps) => {
  const router = useRouter();
  const currentPage = Math.ceil(offset / resultsPerPage) + 1;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const nextPage = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        offset: offset + resultsPerPage,
      },
    });
  };

  const prevPage = () => {
    if (offset > 0) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          offset: offset - resultsPerPage,
        },
      });
    }
  };

  if (totalResults === 0) {
    return null;
  }

  return (
    <Box my={5}>
      <Flex justify="center" gap={2}>
        <Button onClick={prevPage} disabled={offset === 0}>
          Previous
        </Button>
        <Text fontSize="xl">
          page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={nextPage}
          disabled={totalResults - offset < resultsPerPage}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};
