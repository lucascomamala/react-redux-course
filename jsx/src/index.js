import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <App />
)


function App() {
  const name = 'lucas'
  const age =23

  return (
    <div>
      <h1>Hi my name is {name}, and my age is {age}</h1>
    </div>
  )
}
