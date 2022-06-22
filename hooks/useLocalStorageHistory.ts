import { Endpoints } from "../constants";
import { useStorage } from "./useStorage";

export const useLocalStorageHistory = (type: Endpoints, limit = 10) => {
  const { setItem, getItem } = useStorage();
  const key = `search-history-${type}`;

  const getHistory = (): string[] | null => {
    const history = getItem(key);
    if (history) {
      return JSON.parse(history);
    }
    return [];
  };

  const setHistory = (query: string) => {
    if (!query) return;
    const history = getItem(key);
    if (history) {
      const historyList = JSON.parse(history);
      if (historyList.length === limit) {
        historyList.shift();
        setItem(key, JSON.stringify([...historyList, query]));
      }
      setItem(key, JSON.stringify([...historyList, query]));
    } else {
      setItem(key, JSON.stringify([query]));
    }
  };

  return {
    setHistory,
    getHistory,
  };
};
