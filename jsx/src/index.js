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
      maxLength={10}
      spellCheck
      style={{ color: 'red', border: '1px solid blue' }}
    />
  )
}
