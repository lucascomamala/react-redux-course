// import Table from '../components/Table'
import SortableTable from "../components/SortableTable"

const TablePage = () => {
  const data = [
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Banana', color: 'bg-yellow-500', score: 2 },
    { name: 'Pear', color: 'bg-green-600', score: 1 },
    { name: 'Grape', color: 'bg-purple-500', score: 4 },
    { name: 'Kiwi', color: 'bg-green-400', score: 2 },
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
    {
      label: <>Score<sup>2</sup></>,
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2
    }
  ]
  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  )
}

export default TablePage
