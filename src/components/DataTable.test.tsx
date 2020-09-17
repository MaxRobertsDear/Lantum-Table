import React from 'react'
import { render } from '@testing-library/react'
import DataTable from './DataTable'
import { locum } from './mock.data'

test('renders DataTable', async () => {
  const { container } = render(<DataTable userData={locum} />)
  expect(container).toMatchSnapshot()
})
