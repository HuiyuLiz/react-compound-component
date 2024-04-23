import { AccordionItemProvider } from './context/accordionItemContext'
import { type AccordionItemProps } from './types'

const AccordionItem = ({ id, children, className }: AccordionItemProps) => {
  return (
    <AccordionItemProvider id={id}>
      <div className={className}>{children}</div>
    </AccordionItemProvider>
  )
}

export default AccordionItem
