export const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 60,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 130,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 130,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 130,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'techStack',
    headerName: 'Tech Stack',
    width: 200,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
]

export const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    techStack: 'Backend'
  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Evans', firstName: 'Elabo', age: 20 }
]
