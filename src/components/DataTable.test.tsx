import React from 'react'
import { render, screen } from '@testing-library/react'
import DataTable from './DataTable'
import { locum } from './mock.data'

test('renders DataTable', async () => {
  render(<DataTable userData={locum} />)
  // Headings
  expect(screen.getByText(/practice/i)).toBeTruthy()
  expect(screen.getByText(/date/i)).toBeTruthy()
  expect(screen.getByText(/Start and End Time/i)).toBeTruthy()
  expect(screen.getByText(/hourly rate/i)).toBeTruthy()
  expect(screen.getByText(/Number of applicants/i)).toBeTruthy()
})
