import AccordionContent from './AccordionContent'
import AccordionItem from './AccordionItem'
import AccordionTrigger from './AccordionTrigger'
import { AccordionProvider } from './context/accordionContext'
import { type AccordionProps } from './types'

const Accordion = ({ className, children }: AccordionProps) => {
  return (
    <AccordionProvider>
      <div className={className}>{children}</div>
    </AccordionProvider>
  )
}

export default Accordion

Accordion.Trigger = AccordionTrigger
Accordion.Item = AccordionItem
Accordion.Content = AccordionContent
