import { useState } from 'react'

import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div>
      <Button onClick={handleClick} primary className='mb-3'>Open Modal</Button>
      {showModal && <Modal>Modal Content</Modal>}
    </div>
  )
}

export default ModalPage
