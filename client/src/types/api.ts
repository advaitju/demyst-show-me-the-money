type Cells = {
  Value: string;
  Attributes: {
    Value: string;
    Id: string;
  }[];
}[];

export interface ApiBalanceSheet {
  Reports: {
    ReportTitles: [string];
    Rows: {
      RowType: string;
      Title?: string;
      Cells?: Cells;
      Rows: {
        RowType: string;
        Cells: Cells;
      }[];
    }[];
  }[];
}
