import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocalStorage } from './use-local-storage';

interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  state?: string;
  searchedAt: number;
}

export function useSearchHistory() {
  const [history, setHistory] = useLocalStorage<SearchHistoryItem[]>(
    'search-history',
    []
  );

  useQuery({
    queryKey: ['search-history'],
    queryFn: () => history,
    initialData: history,
  });


  const addToHistory = useMutation


}
