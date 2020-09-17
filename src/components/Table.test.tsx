import React from 'react'
import { render, screen } from '@testing-library/react'
import Table from './Table'
import { columns, rows } from './mock.data'

test('renders table headings', async () => {
  render(<Table rows={rows} columns={columns} />)
  expect(screen.getByText(/practice/i)).toBeTruthy()
  expect(screen.getByText(/date/i)).toBeTruthy()
  expect(screen.getByText(/Start and End Time/i)).toBeTruthy()
  expect(screen.getByText(/hourly rate/i)).toBeTruthy()
  expect(screen.getByText(/Number of applicants/i)).toBeTruthy()
  // Body Row 1
  expect(screen.getByText(/Grant Tree Medical Centre/i)).toBeTruthy()
  expect(screen.getByText('19/11/2020')).toBeTruthy()
  expect(
    screen.getByText('19/11/2020, 16:50:00 - 19/11/2020, 19:15:00'),
  ).toBeTruthy()
  expect(screen.getByText('85')).toBeTruthy()
  // Body Row 2
  expect(screen.getByText(/Central London Hospital/i)).toBeTruthy()
  expect(screen.getByText('19/03/2021')).toBeTruthy()
  expect(
    screen.getByText('19/03/2021, 08:50:00 - 19/03/2021, 17:15:00'),
  ).toBeTruthy()
  expect(screen.getByText('100')).toBeTruthy()
})
