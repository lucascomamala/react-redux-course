import { useState } from "react"
import { GoChevronDown } from "react-icons/go"

import Panel from "./Panel"

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
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggleOpen}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && (
        <Panel
          className="absolute top-full"
        >
          {renderedOptions}
        </Panel>
      )}
    </div>
  )
}

export default Dropdown
