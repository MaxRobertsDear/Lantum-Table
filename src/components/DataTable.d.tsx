type Column = {
  id: 'name' | 'date' | 'hours' | 'rate' | 'applicants',
  label: string,
  minWidth?: number,
  align?: 'right' | 'center' | 'left',
}

type RowElement = {
  [x: string]: any,
}

export type { Column, RowElement }
