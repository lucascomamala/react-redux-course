const Table = ({ data }) => {
  const rows = data.map((item, index) => {
    return (
      <tr key={index}>
        <td className={item.color}>{item.name}</td>
        <td className={item.color}>{item.color}</td>
        <td className={item.color}>{item.score}</td>
      </tr>
    )
  })
  
  return (
    <table>
      <thead>
        <tr>
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
