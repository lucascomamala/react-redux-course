import Table from '../components/Table'

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Pear', color: 'bg-green-500', score: 1 },
  ]

  const config = [
    {
      label: 'Fruit',
      render: (item) => item.name
    },
    {
      label: 'Color',
      render: (item) => <div className={`p-3 m-2 ${item.color}`} />
    },
    {
      label: 'Score',
      render: (item) => item.score
    },
  ]
  return (
    <div>
      <Table data={data} config={config} />
    </div>
  )
}

export default TablePage
