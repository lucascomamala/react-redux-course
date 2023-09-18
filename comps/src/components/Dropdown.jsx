import { useState } from "react"

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    console.log(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item" onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <>
      <div onClick={handleToggleOpen}>Select...</div>
      {isOpen && <div>
        {renderedOptions}
      </div>}
    </>
  )
}

export default Dropdown
