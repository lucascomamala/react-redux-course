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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper eros non venenatis. Mauris urna metus, congue sed sapien vitae, ultrices vehicula orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus gravida tellus sit amet nibh rhoncus aliquet. Maecenas porttitor viverra diam, eget consectetur ipsum. Proin at neque sem. Suspendisse vel lectus pretium, venenatis odio sed, ornare tellus. Proin ultrices non tellus eget porttitor. Ut commodo ac sem quis accumsan. Etiam a luctus mauris, lacinia suscipit neque. Etiam eu sodales ipsum. Duis a enim malesuada velit porttitor rhoncus nec porttitor purus.
      </p>
    </div>
  )
}

export default ModalPage
