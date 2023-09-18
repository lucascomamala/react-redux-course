import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: 'dfq321l',
      label: 'Can i Kick it?',
      content: 'Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!Yes, you can!'
    },
    {
      id: 'dfq3212',
      label: 'Who let the dogs out?',
      content: 'Who? Who? Who? Who?'
    },
    {
      id: 'dfq3213',
      label: 'What is love?',
      content: 'Baby dont hurt me, dont hurt me, no more'
    }
  ]
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage
