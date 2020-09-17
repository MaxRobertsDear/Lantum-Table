import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders <App >', async () => {
  const { container } = render(<App />)
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="MuiPaper-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded"
      >
        <div
          class="MuiTableContainer-root makeStyles-container-2"
        >
          <table
            aria-label="sticky table"
            class="MuiTable-root MuiTable-stickyHeader"
          >
            <thead
              class="MuiTableHead-root"
            >
              <tr
                class="MuiTableRow-root MuiTableRow-head"
              >
                <th
                  class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader"
                  scope="col"
                  style="min-width: 170px;"
                >
                  Practice
                </th>
                <th
                  class="MuiTableCell-root MuiTableCell-head MuiTableCell-stickyHeader"
                  scope="col"
                  style="min-width: 100px;"
                >
                  Date
                </th>
                <th
                  class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-stickyHeader"
                  scope="col"
                  style="min-width: 170px;"
                >
                  Start and End Time
                </th>
                <th
                  class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-stickyHeader"
                  scope="col"
                  style="min-width: 170px;"
                >
                  Hourly Rate
                </th>
                <th
                  class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignRight MuiTableCell-stickyHeader"
                  scope="col"
                  style="min-width: 170px;"
                >
                  Number of applicants
                </th>
              </tr>
            </thead>
            <tbody
              class="MuiTableBody-root"
            />
          </table>
        </div>
        <div
          class="MuiTablePagination-root"
        >
          <div
            class="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar MuiToolbar-gutters"
          >
            <div
              class="MuiTablePagination-spacer"
            />
            <p
              class="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit"
              id="mui-28861"
            >
              Rows per page:
            </p>
            <div
              class="MuiInputBase-root MuiTablePagination-input MuiTablePagination-selectRoot"
            >
              <div
                aria-haspopup="listbox"
                aria-labelledby="mui-28861 mui-78445"
                class="MuiSelect-root MuiSelect-select MuiTablePagination-select MuiSelect-selectMenu MuiInputBase-input"
                id="mui-78445"
                role="button"
                tabindex="0"
              >
                10
              </div>
              <input
                aria-hidden="true"
                class="MuiSelect-nativeInput"
                tabindex="-1"
                value="10"
              />
              <svg
                aria-hidden="true"
                class="MuiSvgIcon-root MuiSelect-icon MuiTablePagination-selectIcon"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 10l5 5 5-5z"
                />
              </svg>
            </div>
            <p
              class="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit"
            >
              0-0 of 0
            </p>
            <div
              class="MuiTablePagination-actions"
            >
              <button
                aria-label="Previous page"
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit Mui-disabled Mui-disabled"
                disabled=""
                tabindex="-1"
                title="Previous page"
                type="button"
              >
                <span
                  class="MuiIconButton-label"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                    />
                  </svg>
                </span>
              </button>
              <button
                aria-label="Next page"
                class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit Mui-disabled Mui-disabled"
                disabled=""
                tabindex="-1"
                title="Next page"
                type="button"
              >
                <span
                  class="MuiIconButton-label"
                >
                  <svg
                    aria-hidden="true"
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})
