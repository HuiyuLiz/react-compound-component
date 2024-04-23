import { useAccordion } from './context/accordionContext'
import { useAccordionItem } from './context/accordionItemContext'
import { type AccordionProps } from './types'

const AccordionTrigger = ({ className, children }: AccordionProps) => {
  const { toggle, triggerId } = useAccordion()
  const { id } = useAccordionItem()
  const open = triggerId === id

  return (
    <div
      className={className}
      onClick={() => {
        toggle(id)
      }}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`h-4 w-4 cursor-pointer text-muted-foreground transition-transform ${open ? 'rotate-90' : ''}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  )
}

export default AccordionTrigger
