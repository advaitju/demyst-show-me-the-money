import { QueryKey, useQuery, UseQueryResult } from '@tanstack/react-query';

interface UseGetApiParams {
  api: string;
  queryKey: QueryKey;
}

type UseGetApi = <TData>(params: UseGetApiParams) => UseQueryResult<TData>;

export const useGetApi: UseGetApi = ({ api, queryKey }: UseGetApiParams) =>
  useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1'
        }/${api}`
      );
      return await res.json();
    },
  });
