import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../../data/table_data'

// style={{ height: 400, width: '100%', margin: }}
export default function DataTable() {
  return (
    <div className="md:w-[75dvw] h-[400px] mx-auto pt-5">
      <DataGrid
        className="text-center"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
