import { useGetApi } from '../hooks/queries/useGetApi';

const api = 'balanceSheet';

export const BalanceSheet = () => {
  const query = useGetApi({
    api,
    queryKey: [api],
  });

  if (query.data) console.log(query.data.Reports[0]);

  return <pre>{query.data && JSON.stringify(query.data, null, 2)}</pre>;
};
