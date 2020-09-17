const columns = [
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
const rows = [
  {
    id: '1243',
    name: 'Grant Tree Medical Centre',
    date: '19/11/2020',
    hours: '19/11/2020, 16:50:00 - 19/11/2020, 19:15:00',
    rate: 85,
  },
  {
    id: '1246',
    name: 'Central London Hospital',
    date: '19/03/2021',
    hours: '19/03/2021, 08:50:00 - 19/03/2021, 17:15:00',
    rate: 100,
  },
]
const locum = {
  id: '1234',
  firstName: 'John',
  lastName: 'Doe',
  staffType: 'gp',
  staffTypeId: '1',
}
export { columns, rows, locum }
