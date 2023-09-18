import { useState } from "react"
import { GoChevronDown } from "react-icons/go"

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 bg-white w-full"
        onClick={handleToggleOpen}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-xl" />
      </div>
      {isOpen && <div
        className="absolute top-full border rounded p-3 shadow bg-white w-full"
      >
        {renderedOptions}
      </div>}
    </div>
  )
}

export default Dropdown
