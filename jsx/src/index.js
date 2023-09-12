import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <App />
)


function App() {
  return (
    <input
      type='number'
      min={5}
      max={10}
      alt='test'
      style={{ color: 'red' }}
      list={[1, 2, 3]}
    />
  )
}
