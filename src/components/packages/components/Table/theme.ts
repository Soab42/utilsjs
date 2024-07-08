export interface keepTableTheme {
  root: keepTableRootTheme
  head: keepTableHeadTheme
  row: keepTableRowTheme
  body: keepTableBodyTheme
  caption: keepTableCaptionTheme
}

export interface keepTableCaptionTheme {
  base: string
}

export interface keepTableCellTheme {
  base: string
}

export interface keepTableBodyTheme {
  base: string
  cell: keepTableCellTheme
  showBorderPosition: {
    left: string
    right: string
  }
}

export interface keepTableRowTheme {
  base: string
  hovered: string
  striped: string
}

export interface keepTableHeadTheme {
  base: string
  cell: keepTableHeadCellTheme
}

export interface keepTableHeadCellTheme {
  base: string
  icon: {
    base: string
    on: {
      left: string
      right: string
    }
    off: string
  }
}

export interface keepTableRootTheme {
  base: string
  shadow: string
  wrapper: string
}

export const tableTheme: keepTableTheme = {
  root: {
    base: 'w-full text-left text-body-5 text-gray-500 z-50',
    shadow: '',
    wrapper: 'relative',
  },
  body: {
    base: '',
    cell: {
      base: 'p-4',
    },
    showBorderPosition: {
      left: 'border-l border-l-metal-100 first:border-none',
      right: 'border-r border-r-metal-100 last:border-none',
    },
  },
  head: {
    base: 'text-metal-400 bg-metal-25 text-body-5 overflow-x-auto',
    cell: {
      base: 'py-5 pl-4 text-body-5 font-medium text-metal-400',
      icon: {
        base: 'flex items-center',
        on: {
          left: 'pr-2',
          right: 'pl-2',
        },
        off: '',
      },
    },
  },
  row: {
    base: 'group/row',
    hovered: 'hover:bg-metal-25',
    striped: 'odd:bg-white even:bg-metal-25 even:border even:border-metal-100',
  },
  caption: {
    base: 'bg-white',
  },
}
