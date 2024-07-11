import { useGetApi } from '../../hooks/queries/useGetApi';
import type { ApiBalanceSheet } from '../../types/api';

const api = 'balanceSheet';

export const BalanceSheet = () => {
  const query = useGetApi<ApiBalanceSheet>({
    api,
    queryKey: [api],
  });

  if (query.data) {
    console.log(query.data.Reports[0]);
  }

  // return 'BS';

  if (query.isFetching) return 'Loading...';
  if (query.isError) return 'Error!';
  if (query.data === undefined) return 'No data';

  const data = query.data!.Reports[0];

  const HeaderData = data.Rows.filter(({ RowType }) => RowType === 'Header');
  const SectionData = data.Rows.filter(({ RowType }) => RowType === 'Section');
  console.log(HeaderData, SectionData);

  return (
    <>
      {data.ReportTitles.map((v) => (
        <h1 key={v}>{v}</h1>
      ))}

      <table className='pure-table'>
        <thead>
          <tr>
            {HeaderData[0].Cells?.map(({ Value }) => (
              <th key={Value}>{Value}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {SectionData.map((section, i) => (
            <>
              <tr key={i}>
                <th>{section.Title}</th>
                <td></td>
                <td></td>
              </tr>
              {section?.Rows?.map(({ RowType, Cells }) => (
                <tr>
                  {Cells.map((v) =>
                    RowType === 'SummaryRow' ? (
                      <td>
                        <b>{v.Value}</b>
                      </td>
                    ) : (
                      <td>{v.Value}</td>
                    )
                  )}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>

      <pre>{query.data && JSON.stringify(query.data, null, 2)}</pre>
    </>
  );
};
