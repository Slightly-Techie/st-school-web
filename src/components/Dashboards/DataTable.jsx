import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../../data/table_data'
import Header from '../Header'

// style={{ height: 400, width: '100%', margin: }}
export default function DataTable() {
  const title = `Welcome Andrew`
  const para = `Be excited for the days ahead`
  const stream = `Backend (Caramel) - Javascript`
  const duration = `90d`

  return (
    <>      
      <Header title={title} para={para} stream={stream} duration={duration} />
      
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
    </>
  )
}
