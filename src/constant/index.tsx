import { GridColumns, GridValueGetterParams } from '@material-ui/data-grid';

export const BASE_URL: string = "https://newsapi.org";
export const SAMPLE_TEXT: string = "bitcoin";
export const API_KEY: string = "66421a0a87b6441eab72105e150782b9";

export const columns: GridColumns = [
  {
    field: 'Image',
    renderCell: (params: any) => <img src={params.value} style={{ width: 50, height: 50 }} />,
    sortable: false,
    disableColumnMenu: true
  },
  {
    field: 'Source',
    disableColumnMenu: true,
    sortable: false,
    width: 200
  },
  {
    field: 'Author',
    disableColumnMenu: true,
    sortable: false,
    width: 200
  },
  {
    field: 'Title',
    disableColumnMenu: true,
    sortable: false,
    width: 200
  },
  {
    field: 'Date',
    disableColumnMenu: true,
    valueGetter: (params: GridValueGetterParams) => params.value.toLocaleString(),
    width: 200
  },
  {
    field: 'URL',
    disableColumnMenu: true,
    sortable: false,
    width: 300,
    renderCell: (params: any) => <a href={params.value} target="_blank">{params.value}</a>,
  }
];