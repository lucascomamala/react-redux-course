import { useState } from 'react'

import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const actionBar = <Button onClick={() => setShowModal(false)} primary>I accept</Button>
  const modal = <Modal onClose={() => setShowModal(false)} actionBar={actionBar}>
    <p>Here is an important agreement for you to accept</p>
  </Modal>

  return (
    <div>
      <Button onClick={() => setShowModal(true)} primary className='mb-3'>Open Modal</Button>
      {showModal && modal}
    </div>
  )
}

export default ModalPage
