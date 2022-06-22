import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Endpoints } from "../../constants";
import { useLocalStorageHistory } from "../../hooks";

interface SearchHistoryProps {
  type: Endpoints;
}

export const SearchHistory = ({ type }: SearchHistoryProps) => {
  const { getHistory } = useLocalStorageHistory(type);
  const [history, setHistory] = useState<null | string[]>(null);

  useEffect(() => setHistory(getHistory()), []);

  return (
    <Box mx="auto" my="5" maxW="3xl">
      <Heading size="lg" >Search history</Heading>
      <Flex wrap={"wrap"} gap={3}>
        {history &&
          history.map((entry, index) => (
            <Box key={index} p={2} my={2} borderWidth="1px" borderRadius="lg">
              <Link
                href={{ pathname: `/${type}`, query: { query: entry } }}
                passHref
              >
                <a>{entry}</a>
              </Link>
            </Box>
          ))}
      </Flex>
    </Box>
  );
};
