import Table from './Table'

const SortableTable = (props) => {
  const { config } = props

  const handleClick = (label) => {
    console.log('sort by', label)
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

  return (
    <Table {...props} config={newConfig} />
  )
}

export default SortableTable
