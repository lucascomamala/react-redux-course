import { useState } from 'react'

import Table from './Table'

const SortableTable = (props) => {
  const { config } = props
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    }
    else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    }
    else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  const newConfig = config.map((col) => {
    if (!col.sortValue) return col
    return {
      ...col,
      header: () => (
        <th onClick={() => handleClick(col.label)}>
          {col.label} SORTABLE
        </th>)
    }
  })

  return (<div>
    {sortOrder} - {sortBy}
    <Table {...props} config={newConfig} />
  </div>
  )
}

export default SortableTable
