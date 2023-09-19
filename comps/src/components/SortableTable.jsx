import { useState } from 'react'

import Table from './Table'

const SortableTable = (props) => {
  const { config, data } = props
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

  let sortedData = data
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(col => col.label === sortBy)
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      const reverseOrder = sortOrder === 'asc' ? 1 : -1

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder
      }
      return (valueA - valueB) * reverseOrder
    })

  }

  const newConfig = config.map((col) => {
    if (!col.sortValue) return col
    return {
      ...col,
      header: () => (
        <th onClick={() => handleClick(col.label)}>
          {col.label}
          {getIcons(col.label, sortBy, sortOrder)}
        </th>)
    }
  })



  return (<div>
    {sortOrder} - {sortBy}
    <Table {...props} data={sortedData} config={newConfig} />
  </div>
  )
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) return 'both'
  if (sortOrder === 'asc') return 'asc'
  if (sortOrder === 'desc') return 'desc'
  return 'both'
}

export default SortableTable
