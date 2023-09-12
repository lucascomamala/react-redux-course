import React from 'react'
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
  <App />
)


function App() {
  let msg = 'Hello World'
  if (Math.random() > 0.5) {
    msg = 'Hello React'
  }

  return (
    <div>
      <h1>{msg}</h1>
    </div>
  )
}
