import React from 'react'
import ResuableTable from './Table'
import axios from 'axios'
import { Column, RowElement } from './DataTable.d'

const DataTable = ({ userData }: any) => {
  const [data, setData] = React.useState([])

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

  const rows: RowElement[] = []

  if (data.length) {
    data.forEach((element: RowElement) => {
      if (
        Date.parse(element.startDatetime) > Date.now() &&
        element.status.toUpperCase() === 'POSTED' &&
        !element.locum &&
        element.staffType.toLowerCase() === userData.staffType.toLowerCase() &&
        Date.parse(element.startDatetime) && // to ensure date is valid
        Date.parse(element.endDatetime) // to ensure date is valid
      ) {
        rows.push({
          id: element.id,
          name: element.practice.name,
          date: new Date(
            Date.parse(element.startDatetime),
          ).toLocaleDateString(),
          hours: `${new Date(
            Date.parse(element.startDatetime),
          ).toLocaleString()} - ${new Date(
            Date.parse(element.endDatetime),
          ).toLocaleString()}`,
          rate: element.hourlyRate,
          applicants: element.applicationIds.length,
        })
      }
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
  return <ResuableTable rows={rows} columns={columns} />
}

export default DataTable
