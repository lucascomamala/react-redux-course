import { useState } from 'react'

import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Button onClick={() => setShowModal(true)} primary className='mb-3'>Open Modal</Button>
      {showModal && <Modal onClose={() => setShowModal(false)}>Modal Content</Modal>}
    </div>
  )
}

export default ModalPage
