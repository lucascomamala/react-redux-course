import Table from './Table'

const SortableTable = (props) => {
  const { config } = props

  const newConfig = config.map((col) => {
    if (!col.sortValue) return col
    return {
      ...col,
      header: () => <th>{col.label} SORTABLE</th>
    }
  })

  return (
    <Table {...props} config={newConfig} />
  )
}

export default SortableTable
