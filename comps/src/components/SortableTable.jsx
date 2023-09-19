import { useState } from 'react'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'

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

  const newConfig = config.map((col) => {
    if (!col.sortValue) return col
    return {
      ...col,
      header: () => (
        <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(col.label)}>
          <div className='flex items-center'>
            {col.label}
            {getIcons(col.label, sortBy, sortOrder)}
          </div>
        </th>)
    }
  })

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting
  let sortedData = data
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((col) => col.label === sortBy)
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

  return (<div>
    {sortOrder} - {sortBy}
    <Table {...props} data={sortedData} config={newConfig} />
  </div>
  )
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) return <FaSort />
  if (sortOrder === 'asc') return <FaSortUp />
  if (sortOrder === 'desc') return <FaSortDown />
  return <FaSort />
}

export default SortableTable
