import React from 'react'
import { render } from '@testing-library/react'
import Table from './Table'

test('renders Table', async () => {
  const { container } = render(<Table />)
  expect(container).toMatchSnapshot()
})
