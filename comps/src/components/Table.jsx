const Table = ({ data, config }) => {

  const headers = config.map((item) => {
    return (
      <th key={item.label}>{item.label}</th>
    )
  })

  const rows = data.map((item, index) => {
    const cells = config.map((col) => {
      return (
        <td className='p-2' key={col.label}>{col.render(item)}</td>
      )
    })

    return (
      <tr className="border-b" key={index}>
        {cells}
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
