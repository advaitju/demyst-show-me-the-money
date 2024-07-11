import { QueryKey, useQuery } from '@tanstack/react-query';

interface UseGetApiParams {
  api: string;
  queryKey: QueryKey;
}

export const useGetApi = ({ api, queryKey }: UseGetApiParams) =>
  useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/${api}`);
      return await res.json();
    },
  });
