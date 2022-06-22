import { Box } from "@chakra-ui/react";
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
    <Box>
      <ul>
        {history &&
          history.map((entry, index) => (
            <li key={index}>
              <Link
                href={{ pathname: `/${type}`, query: { query: entry } }}
                passHref
              >
                <a>{entry}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Box>
  );
};
