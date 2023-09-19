// import Table from '../components/Table'
import SortableTable from "../components/SortableTable"

const TablePage = () => {
  const data = [
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Pear', color: 'bg-green-500', score: 1 },
  ]

  const config = [
    {
      label: 'Fruit',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    },
  ]
  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  )
}

export default TablePage
