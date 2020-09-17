import React from 'react'
import DataTable from './components/DataTable'
import { locum } from './components/mock.data'

const App = () => {
  return <DataTable userData={locum} />
}

export default App
