const Table = ({ data, config }) => {

  const headers = config.map((item) => {
    return (
      <th key={item.label}>{item.label}</th>
    )
  })

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
          {headers}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}

export default Table
