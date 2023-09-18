import { useState } from "react"

const Dropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onSelect(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="item" onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  let content = 'Select...'
  if (selected) {
    content = selected.label
  }

  return (
    <>
      <div onClick={handleToggleOpen}>{content}</div>
      {isOpen && <div>
        {renderedOptions}
      </div>}
    </>
  )
}

export default Dropdown
