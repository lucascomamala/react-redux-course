import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <App />
)


function App() {
  return (
    <div>
      <h1>{new Date().toLocaleTimeString()}</h1>
    </div>
  )
}
