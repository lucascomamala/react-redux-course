
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'

import Table from './Table'
import useSort from '../hooks/use_sort'

const SortableTable = (props) => {
  const { config, data } = props

  const { setSortColumn, sortedData, sortOrder, sortBy } = useSort(data, config)

  const newConfig = config.map((col) => {
    if (!col.sortValue) return col
    return {
      ...col,
      header: () => (
        <th className='cursor-pointer hover:bg-gray-100' onClick={() => setSortColumn(col.label)}>
          <div className='flex items-center'>
            {col.label}
            {getIcons(col.label, sortBy, sortOrder)}
          </div>
        </th>)
    }
  })



  return (
    <Table {...props} data={sortedData} config={newConfig} />
  )
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) return <FaSort />
  if (sortOrder === 'asc') return <FaSortUp />
  if (sortOrder === 'desc') return <FaSortDown />
  return <FaSort />
}

export default SortableTable
