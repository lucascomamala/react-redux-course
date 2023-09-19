const Table = ({ data }) => {
  const rows = data.map((item, index) => {
    return (
      <tr className="border-b" key={index}>
        <td className='p-3'>{item.name}</td>
        <td className='p-3'>
          <div className={`p-3 m-2 ${item.color}`} />
        </td>
        <td className='p-3'>{item.score}</td>
      </tr>
    )
  })

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table
