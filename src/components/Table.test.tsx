import React from 'react'
import { render } from '@testing-library/react'
import Table from './Table'
import { columns, rows } from './mock.data'

test('renders Table', async () => {
  const { container } = render(<Table rows={rows} columns={columns} />)
  expect(container).toMatchSnapshot()
})
