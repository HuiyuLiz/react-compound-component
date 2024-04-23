import { useRef } from 'react'

import { useAccordion } from './context/accordionContext'
import { useAccordionItem } from './context/accordionItemContext'
import { type AccordionProps } from './types'

const AccordionContent = ({ className, children }: AccordionProps) => {
  const { triggerId } = useAccordion()
  const { id } = useAccordionItem()
  const open = triggerId === id
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className="overflow-hidden transition-[height] duration-[500ms] ease-in-out"
      style={{ height: open ? ref.current?.offsetHeight : 0 }}
    >
      <div className={className} ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default AccordionContent
