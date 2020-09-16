import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import axios from 'axios'

interface Column {
  id: 'name' | 'date' | 'hours' | 'rate' | 'applicants';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
}

const columns: Column[] = [
  { id: 'name', label: 'Practice', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 100 },
  {
    id: 'hours',
    label: 'Start and End Time',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'rate',
    label: 'Hourly Rate',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'applicants',
    label: 'Number of applicants',
    minWidth: 170,
    align: 'right',
  },
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
})

const DataTable = () => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [data, setData] = React.useState([])

  interface RowElement {
    id: string;
    name: string;
    date: string;
    hours: string;
    rate: number;
    applicants: number;
  }
  const rows: RowElement[] = []

  if (data.length) {
    data.forEach((element) => {
      rows.push({
        // @ts-ignore
        id: element.id,
        // @ts-ignore
        name: element.practice.name,
        // @ts-ignore
        date: new Date(Date.parse(element.startDatetime)).toLocaleDateString(),
        hours: `${new Date(
          // @ts-ignore
          Date.parse(element.startDatetime),
        ).toLocaleString()} - ${new Date(
          // @ts-ignore
          Date.parse(element.endDatetime),
        ).toLocaleString()}`,
        // @ts-ignore
        rate: element.hourlyRate,
        // @ts-ignore
        applicants: element.applicationIds.length,
      })
    })
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions',
        )
        if (result.status !== 200) {
          throw new Error('Something went wrong!')
        }
        setData(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
export default DataTable
